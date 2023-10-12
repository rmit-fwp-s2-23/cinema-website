const { Sequelize, DataTypes, HasMany } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

// Include models.
db.user = require("./models/user.js")(db.sequelize, DataTypes);
db.post = require("./models/post.js")(db.sequelize, DataTypes);
db.film = require("./models/film.js")(db.sequelize, DataTypes);
// Relate post and user.
db.post.belongsTo(db.user, { foreignKey: { name: "user_id", allowNull: false } });
db.post.belongsTo(db.film, {foreignKey: {name:"film_id", allowNull: false}})


// Learn more about associations here: https://sequelize.org/master/manual/assocs.html

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });
  
  await seedData();
};

async function seedData() {
  const count = await db.user.count();
  const count_film = await db.film.count();

  // Only seed data if necessary.
  if(count > 0)
    return;

  const argon2 = require("argon2");

  let hash = await argon2.hash("abc123", { type: argon2.argon2id });
  await db.user.create({ username: "mbolger", password_hash: hash, email: "mbolger@gmail.com", date:"11/20/2020"});

  hash = await argon2.hash("def456", { type: argon2.argon2id });
  await db.user.create({ username: "shekhar", password_hash: hash, email: "shekhar@gmail.com", date:"11/20/2020" });

  if (count_film > 0)
    return;
  
  await db.film.create({title: "Avatar 2", rating: 0, releaseDate: 2023-01-01, description: ""});
  await db.film.create({title: "The Mokey King 3", rating: 0, releaseDate: 2023-01-01, description: ""});
  await db.film.create({title: "The Boss Baby", rating: 0, releaseDate: 2023-01-01, description: ""});
  await db.film.create({title: "Kung Fu Panda 2", rating: 0, releaseDate: 2023-01-01, description: ""});
  await db.film.create({title: "Scooby-Doo 2", rating: 0, releaseDate: 2023-01-01, description: ""});
  await db.film.create({title: "Tom and Jerry", rating: 0, releaseDate: 2023-01-01, description: ""});
  await db.film.create({title: "Mr. Bean's Holiday", rating: 0, releaseDate: 2023-01-01, description: ""});

}



module.exports = db;
