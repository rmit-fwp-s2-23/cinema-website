module.exports = (sequelize, DataTypes) =>
  sequelize.define("film", {
    film_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });
