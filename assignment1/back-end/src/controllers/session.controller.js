const { where } = require("sequelize");
const db = require("../database");

// Select all sessions
exports.all = async (req, res) => {
  const session = await db.session.findAll({
    include: [{ model: db.film }, { model: db.ticket, as: "tickets" }],
  });
  res.json(session);
};

// Select all sessions based on film
exports.find = async (req, res) => {
  const film = await db.film.findOne({ where: { title: req.body.title } });
  const session = await db.session.findOne({
    where: { film_id: film.film_id, session: req.params.id },
    include: { model: db.film },
  });
  res.json(session);
};

//Update slot after reserving
exports.updateSlot = async (req, res) => {
  const film = await db.film.findOne({ where: { title: req.body.title } });
  const session = await db.session.findOne({
    where: { film_id: film.film_id, session: req.params.id },
    include: { model: db.film },
  });
  const ticket = await db.ticket.findAll({
    where: { session_id: session.id },
  });
  if (ticket.length != 0) {
    session.slot = 10 - ticket.length;
  } else {
    session.slot = 10;
  }
  await session.save();
  return res.json(session);
};
