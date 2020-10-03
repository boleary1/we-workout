// Exercie Module

module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    // 
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    body_zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipment_used: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }

  });
Exercise.associate = (models)=> {
  Exercise.belongsToMany(models.Workout, {
    through: "ExerciseWorkout"
});
};


  return Exercise;
};