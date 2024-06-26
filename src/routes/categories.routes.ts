import { Router } from "express";
import { CategoriesController } from "../controllers/categories.controller";
import { handleInputErrors } from "../middlewares/validation";
import { validateRequiredFields } from "../utils/error.handle";

const router = Router();

router.get("/", CategoriesController.getCategories);
router.post(
    "/",
    ...validateRequiredFields(["name"]),
    handleInputErrors,
    CategoriesController.createCategory
);

export default router;
