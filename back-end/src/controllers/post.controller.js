const db = require("../database");

// Select all posts from the database.
exports.find = async (req, res) => {
  const user = await db.user.findOne({ where: { username: req.params.id } });
  const user_id = user.user_id;  
  const posts = await db.post.findAll({where: {user_id},include: db.user });
  res.json(posts);
};

exports.all = async (req, res) => {
  const posts = await db.post.findAll();
  res.json(posts);
}


// Create a post in the database.
exports.create = async (req, res) => {
  const user = await db.user.findOne({ where: { username: req.body.username } });
  const user_id = user.user_id;
  const post = await db.post.create({
    content: req.body.content,
    rating: req.body.rating,
    user_id: user_id  });

  res.json(post);
};

// Update a post in the database.
exports.update = async (req, res) => {
  const post = await db.post.findOne({where: {post_id: req.params.id}});

  post.content = req.body.content;
  post.rating = req.body.rating;
  await post.save();
  return res.json(post);
};


exports.remove = async (req,res) => {
  
  const post = await db.post.findOne({where: {post_id: req.params.id}});
  if(post !== null) {
    await post.destroy();
    removed = true;
  }

  return res.json(removed);
};