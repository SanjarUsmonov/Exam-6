const { Router } = require("express");

const {
  postUser,
  getAllUser,
  getUserById,
  getUserByLimit,
  getUserByDate,
  updateUser,
  deleUser,
} = require("../controllers/users/users");

const router = Router();

router.post("/post", postUser);
router.get("/get", getAllUser);
router.get("/get/:id", getUserById);
router.get(["/limit", "/limit/:id"], getUserByLimit);
router.get(["/date", "/date/:date"], getUserByDate);
router.put("/put/:id", updateUser);
router.delete("/del/:id", deleUser);

module.exports = router;
