import { Router } from "vexpress";
import {
    getAllItems,
    getItemById,
    getItemsWithQuery,
    createItem,
    updateItemById,
    deleteItemById,
    patchItemById,
    getItemsByCategory,
    searchItems,
    getNestedResource
} from "../controllers/common.controller.js";

const router = new Router();

router.get("/items", getAllItems);
router.get("/items/search", searchItems);
router.get("/items/query", getItemsWithQuery);
router.get("/items/:id", getItemById);
router.get("/items/category/:category", getItemsByCategory);
router.get("/users/:userId/items/:itemId", getNestedResource);

router.post("/items", createItem);

router.put("/items/:id", updateItemById);

router.patch("/items/:id", patchItemById);

router.delete("/items/:id", deleteItemById);

export default router;
