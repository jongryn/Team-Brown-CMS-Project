$(document).ready(function() {

  var calendar = $(‘#calendar’).fullCalendar({ // assign calendar and triger calendar plugin

    header: {
      left: ‘prev,
      next today’,
      center: ‘title’,
      right: ‘agendaWeek,
      agendaDay’
    },
    defaultView: ‘agendaWeek’,
    editable: true,
    selectable: true,
    allDaySlot: false,
    events: “api/event ? view = 1”, // request to load current events & get all events on load
    eventClick: function(event, jsEvent, view) { // when some one click on any event

      endtime = $.fullCalendar.moment(event.end).format(‘h: mm’);
      starttime = $.fullCalendar.moment(event.start).format(‘dddd, MMMM Do YYYY, h: mm’);

      var mywhen = starttime + ‘–‘ +endtime;

      $(‘#modalTitle’).html(event.title);
      $(‘#modalWhen’).text(mywhen);
      $(‘#eventID’).val(event.id);
      $(‘#calendarModal’).modal();

    },

    select: function(start, end, jsEvent) { // click on empty time slot & select empty slot to add event
      endtime = $.fullCalendar.moment(end).format(‘h: mm’);
      starttime = $.fullCalendar.moment(start).format(‘dddd, MMMM Do YYYY, h: mm’);

      var mywhen = starttime + ‘–‘ +endtime;

      start = moment(start).format();
      end = moment(end).format();

      $(‘#createEventModal# startTime’).val(start);
      $(‘#createEventModal# endTime’).val(end);
      $(‘#createEventModal# when’).text(mywhen);
      $(‘#createEventModal’).modal(‘toggle’);

    },

    eventDrop: function(event, delta) { // event drag and drop event timing

      $.ajax({

        url: ‘api/event’,
        data: ‘action = update & title = ’+event.title + ‘ & start = ’+moment(event.start).format() + ‘ & end = ’+moment(event.end).format() + ‘ & id = ’+event.id,
        type: “POST”,

        success: function(json) {

          //alert(json);

        }
      });
    },

    eventResize: function(event) { // resize to increase or decrease time of event

      $.ajax({

        url: ‘api/event’,
        data: ‘action = update & title = ’+event.title + ‘ & start = ’+moment(event.start).format() + ‘ & end = ’+moment(event.end).format() + ‘ & id = ’+event.id,
        type: “POST”,

        success: function(json) {

          //alert(json);

        }
      });
    }
  });

  $(‘#submitButton’).on(‘click’, function(e) { // add event submit

    // We don’t want this to act as a link so cancel the link action

    e.preventDefault();
    doSubmit(); // send to form submit function

  });

  $(‘#deleteButton’).on(‘click’, function(e) { // delete event clicked

    // We don’t want this to act as a link so cancel the link action
    e.preventDefault();

    doDelete();
    send data to delete

    function

  });



  function doDelete() { // delete event

    $(“#calendarModal”).modal(‘hide’);

    var eventID = $(‘#eventID’).val();

    $.ajax({

      url: ‘api/event’,
      data: ‘action = delete & id = ’+eventID,
      type: “POST”,

      success: function(json) {

        if (json == 1)

          $(“#calendar”).fullCalendar(‘removeEvents’, eventID);

        else

          return false;

      }
    });
  }

  function doSubmit() { // add event

    $(“#createEventModal”).modal(‘hide’);

    var title = $(‘#title’).val();
    var startTime = $(‘#startTime’).val();
    var endTime = $(‘#endTime’).val();

    $.ajax({

      url: ‘api/event’,
      data: ‘action = add & title = ’+title + ‘ & start = ’+startTime + ‘ & end = ’+endTime,
      type: “POST”,

      success: function(json) {

        $(“#calendar”).fullCalendar(‘renderEvent’,
          {
            id: json.id,
            title: title,
            start: startTime,
            end: endTime,
          },
          true);
      }
    });
  }
});
