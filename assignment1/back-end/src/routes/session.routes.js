module.exports = (express, app) => {
    const controller = require("../controllers/session.controller.js");
    const router = express.Router();
  
    // Select all users.
    router.get("/", controller.all);

     //update slot
     router.put("/:id", controller.updateSlot);

     router.get("/:id", controller.find)

    app.use("/api/film", router);
};
