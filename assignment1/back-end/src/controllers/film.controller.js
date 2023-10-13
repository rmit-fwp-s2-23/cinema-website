const db = require("../database");

exports.all = async (req, res) => {
    const film = await db.film.findAll();
  
    res.json(film);
  };
  