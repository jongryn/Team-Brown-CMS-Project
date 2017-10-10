module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("todo", {
    task: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    category: DataTypes.STRING,
    note: DataTypes.TEXT,
    urgency: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};