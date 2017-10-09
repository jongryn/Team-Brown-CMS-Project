module.exports = function(sequelize, DataTypes) {
    var Calendar = sequelize.define("calendar", {
      id: DataTypes.INTEGER,
      event: DataTypes.STRING,
      year: DataTypes.INTEGER,
      month: DataTypes.INTEGER,
      day: DataTypes.INTEGER,
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING,
      location: DataTypes.STRING,
      note: DataTypes.STRING
    });
    return Calendar;
  };

