module.exports = (sequelize, DataTypes) =>
  sequelize.define("session", {
    session_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    session: {
      type: DataTypes.DATE,
      allowNull: false
    },
    slot: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });
