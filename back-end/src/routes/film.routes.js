module.exports = (express, app) => {
    const controller = require("../controllers/film.controller.js");
    const router = express.Router();
  
    // Select all users.
    router.get("/", controller.all);

    app.use("/api/film", router);
};
