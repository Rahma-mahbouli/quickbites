const router = require("express").Router();

const {
  checkDuplicatedCategory,
  checkCategoryExist,
} = require("../middleware/verifyCategory");
 
const {
  getAllCategories,
  deleteCategory,
  editCategoryName,
  createCategory,
} = require("../controllers/categoryControllers");

router.get("/", getAllCategories);
router.post(
  "/",
  [ checkDuplicatedCategory],
  createCategory
);
router.put(
  "/:id",
  [ checkCategoryExist],
  editCategoryName
);
router.delete(
  "/:id",
  [ checkCategoryExist],
  deleteCategory
);

module.exports = router;
