let express = require("express");
const router = express.Router();
let { list, show, create, update, remove } = require("./usersController");

router.get("/users", list);
router.get("/users/:id", show);
router.post("/users", create);
router.put("/users/:id", update);
router.delete("/users/:id", remove);

module.exports = router;
