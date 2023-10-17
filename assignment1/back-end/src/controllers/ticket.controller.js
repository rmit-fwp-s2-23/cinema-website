const db = require("../database");

// Select all ticket from the database based on username
exports.find = async (req, res) => {
  const user = await db.user.findOne({where : {username: req.params.id}});
  const posts = await db.post.findAll({
    where: { user_id: user.user_id},
    include: [{ model: db.user }, { model: db.film }],
  });
  res.json(posts);
};

// Select all tickets
exports.all = async (req, res) => {
  const tickets = await db.ticket.findAll();
  res.json(tickets);
};

// Create a ticket in the database.
exports.create = async (req, res) => {
  const user = await db.user.findOne({
    where: { username: req.body.username },
  });

  const session = await db.session.findOne({
    where: { session: req.body.session },
  });

  const ticket = await db.ticket.create({
    quantity: req.body.quantity,
    user_id: user.user_id,
    session: session.session_id,
  });
  user.addTicket(ticket);
  session.addTicket(ticket);
  res.json(ticket);
};