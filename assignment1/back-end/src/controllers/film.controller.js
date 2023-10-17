const db = require("../database");

exports.all = async (req, res) => {
  const film = await db.film.findAll({
    include: { model: db.post, as: "posts" },
  });
  res.json(film);
};

exports.find = async (req, res) => {
  const film = await db.film.findOne({
    where: { title: req.params.id },
    include: { model: db.post, as: "posts" },
  });
  res.json(film);
};

exports.updateRating = async (req, res) => {
  const film = await db.film.findOne({ where: { title: req.params.id }, include: { model: db.post, as: "posts" } });
  let totalRating = 0;
  for (const post of film.posts) {
    totalRating += post.rating;
  }
  const averageRating = totalRating / film.posts.length;
  film.rating = averageRating.toFixed(2);

  await film.save();
  return res.json(film);
};