module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("todo", {
      id: DataTypes.INTEGER,
      task: DataTypes.STRING,
      year: DataTypes.INTEGER,
      month: DataTypes.INTEGER,
      day: DataTypes.INTEGER,
      timeOfDay: DataTypes.STRING,
      note: DataTypes.STRING,
      urgency: DataTypes.DECIMAL
    });
    return Todo;
  };