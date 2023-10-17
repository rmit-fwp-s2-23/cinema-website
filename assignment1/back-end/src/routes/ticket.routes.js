module.exports = (express, app) => {
  const controller = require("../controllers/ticket.controller.js");
  const router = express.Router();

  // Select all posts.
  router.get("/", controller.all);

  //Select all posts from username
  router.get("/:id", controller.find);

  // Create a new post.
  router.post("/", controller.create);

  // Add routes to server.
  app.use("/api/tickets", router);
};
