class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destory]

  # GET /events
  # GET /events.json
  def index
    @events = Event.where(start: params[:start].params[:end])
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  #POST /events
  #POST /events.json
  def create
    @event = Event.new(event_params)
    @event.save
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    @event.update(event_params)
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never truslst parameters from the scary internet, only allow the white list throught.
    def event_params
      params.require(:event).permit(:title, :data_range, :start, :end, :color)
    end
lsend
