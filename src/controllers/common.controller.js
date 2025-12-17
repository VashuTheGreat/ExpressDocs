import { expressRepre } from "../utils/commonExporter.js";

export const getAllItems = expressRepre({
    summary: "Get all items",
    response: "Array of items"
}, (req, res) => {
    res.json({ message: "Get all items", data: [] });
});

export const getItemById = expressRepre({
    summary: "Get item by ID",
    params: ["id"],
    response: "Single item"
}, (req, res) => {
    res.json({ message: "Get item by ID", id: req.params.id });
});

export const getItemsWithQuery = expressRepre({
    summary: "Get items with query parameters",
    query: ["page", "limit", "sort"],
    response: "Filtered items"
}, (req, res) => {
    res.json({ 
        message: "Get items with query", 
        query: req.query 
    });
});

export const createItem = expressRepre({
    summary: "Create new item",
    body: ["name", "description", "price"],
    response: "Created item"
}, (req, res) => {
    res.status(201).json({ 
        message: "Item created", 
        data: req.body 
    });
});

export const updateItemById = expressRepre({
    summary: "Update item by ID",
    params: ["id"],
    body: ["name", "description", "price"],
    response: "Updated item"
}, (req, res) => {
    res.json({ 
        message: "Item updated", 
        id: req.params.id, 
        data: req.body 
    });
});

export const deleteItemById = expressRepre({
    summary: "Delete item by ID",
    params: ["id"],
    response: "Deletion confirmation"
}, (req, res) => {
    res.json({ 
        message: "Item deleted", 
        id: req.params.id 
    });
});

export const patchItemById = expressRepre({
    summary: "Partially update item by ID",
    params: ["id"],
    body: ["name", "description"],
    response: "Patched item"
}, (req, res) => {
    res.json({ 
        message: "Item patched", 
        id: req.params.id, 
        data: req.body 
    });
});

export const getItemsByCategory = expressRepre({
    summary: "Get items by category",
    params: ["category"],
    query: ["limit", "offset"],
    response: "Items in category"
}, (req, res) => {
    res.json({ 
        message: "Get items by category", 
        category: req.params.category,
        query: req.query
    });
});

export const searchItems = expressRepre({
    summary: "Search items",
    query: ["q", "category", "minPrice", "maxPrice"],
    response: "Search results"
}, (req, res) => {
    res.json({ 
        message: "Search items", 
        query: req.query 
    });
});

export const getNestedResource = expressRepre({
    summary: "Get nested resource",
    params: ["userId", "itemId"],
    response: "Nested resource"
}, (req, res) => {
    res.json({ 
        message: "Get nested resource", 
        userId: req.params.userId,
        itemId: req.params.itemId
    });
});
