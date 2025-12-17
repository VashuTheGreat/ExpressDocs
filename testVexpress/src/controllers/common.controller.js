import { expressRepre } from "vexpress";

export const getAllItems = expressRepre({
    summary: "Get all items",
    response: "Array of items"
}, (req, res) => {
    res.json({ message: "Get all items", data: [] });
});

export const getItemById = expressRepre({
    summary: "Get item by ID",
    params: { id: "123" },
    response: "Single item"
}, (req, res) => {
    res.json({ message: "Get item by ID", id: req.params.id });
});

export const getItemsWithQuery = expressRepre({
    summary: "Get items with query parameters",
    query: { page: 1, limit: 10, sort: "asc" },
    response: "Filtered items"
}, (req, res) => {
    res.json({ 
        message: "Get items with query", 
        query: req.query 
    });
});

export const createItem = expressRepre({
    summary: "Create new item",
    body: { name: "Sample Item", description: "Item description", price: 99.99 },
    response: "Created item"
}, (req, res) => {
    res.status(201).json({ 
        message: "Item created", 
        data: req.body 
    });
});

export const updateItemById = expressRepre({
    summary: "Update item by ID",
    params: { id: "123" },
    body: { name: "Updated Item", description: "Updated description", price: 149.99 },
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
    params: { id: "123" },
    response: "Deletion confirmation"
}, (req, res) => {
    res.json({ 
        message: "Item deleted", 
        id: req.params.id 
    });
});

export const patchItemById = expressRepre({
    summary: "Partially update item by ID",
    params: { id: "123" },
    body: { name: "Patched Item", description: "Patched description" },
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
    params: { category: "electronics" },
    query: { limit: 20, offset: 0 },
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
    query: { q: "laptop", category: "electronics", minPrice: 100, maxPrice: 1000 },
    response: "Search results"
}, (req, res) => {
    res.json({ 
        message: "Search items", 
        query: req.query 
    });
});

export const getNestedResource = expressRepre({
    summary: "Get nested resource",
    params: { userId: "user123", itemId: "item456" },
    response: "Nested resource"
}, (req, res) => {
    res.json({ 
        message: "Get nested resource", 
        userId: req.params.userId,
        itemId: req.params.itemId
    });
});
