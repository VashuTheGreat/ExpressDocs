# 🚀 Vexpress

**Express with Auto-Generated Interactive API Documentation**

Vexpress is a lightweight wrapper around Express.js that automatically generates beautiful, interactive API documentation similar to FastAPI's Swagger UI. Write your Express routes as usual, add metadata, and get instant documentation!

[![npm version](https://img.shields.io/npm/v/@vashuthegreat/vexpress.svg)](https://www.npmjs.com/package/@vashuthegreat/vexpress)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## ✨ Features

- 🎨 **Beautiful Interactive Docs** - FastAPI-style documentation UI
- 🔄 **Auto Type Detection** - Automatically infers types from example values
- 📝 **Pre-filled Examples** - Input fields come with example values
- 🔌 **Drop-in Replacement** - 100% Express-compatible with Proxy pattern
- 🧪 **Try it Out** - Test endpoints directly from the browser
- 🎯 **Zero Config** - Works out of the box with minimal setup
- 📦 **Lightweight** - Only 5.8 kB package size

## 📦 Installation

```bash
npm install @vashuthegreat/vexpress
```

## 🚀 Quick Start

```javascript
import { Vexpress, expressRepre } from "@vashuthegreat/vexpress";

const app = new Vexpress();

// Use Express middleware
app.use(Vexpress.json());

// Define routes with documentation metadata
app.get(
  "/users/:id",
  expressRepre(
    {
      summary: "Get user by ID",
      params: { id: "123" },
      response: "User object",
    },
    (req, res) => {
      res.json({ id: req.params.id, name: "John Doe" });
    }
  )
);

app.post(
  "/users",
  expressRepre(
    {
      summary: "Create new user",
      body: { name: "John Doe", email: "john@example.com", age: 25 },
      response: "Created user object",
    },
    (req, res) => {
      res.status(201).json(req.body);
    }
  )
);

// Setup documentation endpoints
app.setupDocs(); // Adds /docs and /openapi.json routes

app.listen(3000, () => {
  console.log("Server: http://localhost:3000");
  console.log("Docs: http://localhost:3000/docs");
});
```

Visit `http://localhost:3000/docs` to see your interactive API documentation! 🎉

## 📖 API Reference

### Vexpress Class

```javascript
import { Vexpress } from "@vashuthegreat/vexpress";

const app = new Vexpress();
```

The main application class that extends Express functionality.

#### Methods

- **`app.get(path, ...handlers)`** - Define GET route
- **`app.post(path, ...handlers)`** - Define POST route
- **`app.put(path, ...handlers)`** - Define PUT route
- **`app.patch(path, ...handlers)`** - Define PATCH route
- **`app.delete(path, ...handlers)`** - Define DELETE route
- **`app.use(path, middleware)`** - Use middleware
- **`app.setupDocs(docsPath?, openapiPath?)`** - Setup documentation routes
- **`app.listen(port, callback)`** - Start server

All other Express methods are automatically forwarded via Proxy!

#### Static Methods

- **`Vexpress.json()`** - Body parser middleware (JSON)
- **`Vexpress.urlencoded()`** - Body parser middleware (URL-encoded)
- **`Vexpress.static()`** - Static file serving middleware

### Router Class

```javascript
import { Router } from "@vashuthegreat/vexpress";

const router = new Router();

router.get("/items", getAllItems);
router.post("/items", createItem);

export default router;
```

Create modular route handlers, just like Express Router.

### expressRepre Decorator

```javascript
import { expressRepre } from "@vashuthegreat/vexpress";

const handler = expressRepre(
  {
    summary: "Endpoint description",
    params: { id: "123" }, // Path parameters with examples
    query: { page: 1, limit: 10 }, // Query parameters with examples
    body: { name: "Example" }, // Request body with examples
    response: "Response description",
  },
  (req, res) => {
    // Your handler logic
  }
);
```

Decorator to add metadata to route handlers for documentation.

#### Metadata Options

| Option     | Type     | Description                             |
| ---------- | -------- | --------------------------------------- |
| `summary`  | `string` | Brief description of the endpoint       |
| `params`   | `object` | Path parameters with example values     |
| `query`    | `object` | Query parameters with example values    |
| `body`     | `object` | Request body schema with example values |
| `response` | `string` | Description of the response             |

**Note**: Types are automatically detected from example values using `typeof`!

## 🎯 Complete Example

```javascript
import { Vexpress, Router, expressRepre } from "@vashuthegreat/vexpress";

const app = new Vexpress();

// Middleware
app.use(Vexpress.json());
app.use(Vexpress.urlencoded({ extended: true }));

// Routes with documentation
app.get(
  "/items",
  expressRepre(
    {
      summary: "Get all items",
      query: { page: 1, limit: 10, sort: "asc" },
      response: "Array of items",
    },
    (req, res) => {
      res.json({ items: [], page: 1, total: 0 });
    }
  )
);

app.get(
  "/items/:id",
  expressRepre(
    {
      summary: "Get item by ID",
      params: { id: "123" },
      response: "Single item object",
    },
    (req, res) => {
      res.json({ id: req.params.id, name: "Sample Item" });
    }
  )
);

app.post(
  "/items",
  expressRepre(
    {
      summary: "Create new item",
      body: {
        name: "Sample Item",
        description: "Item description",
        price: 99.99,
        inStock: true,
      },
      response: "Created item object",
    },
    (req, res) => {
      res.status(201).json({ id: "new-id", ...req.body });
    }
  )
);

app.put(
  "/items/:id",
  expressRepre(
    {
      summary: "Update item by ID",
      params: { id: "123" },
      body: { name: "Updated Item", price: 149.99 },
      response: "Updated item object",
    },
    (req, res) => {
      res.json({ id: req.params.id, ...req.body });
    }
  )
);

app.delete(
  "/items/:id",
  expressRepre(
    {
      summary: "Delete item by ID",
      params: { id: "123" },
      response: "Deletion confirmation",
    },
    (req, res) => {
      res.json({ message: "Item deleted", id: req.params.id });
    }
  )
);

// Setup documentation
app.setupDocs(); // Default: /docs and /openapi.json

// Custom documentation paths
// app.setupDocs('/api-docs', '/api/openapi.json');

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
  console.log("📚 API Docs available at http://localhost:3000/docs");
});
```

## 🗂️ Using Routers

```javascript
// routes/users.js
import { Router, expressRepre } from "@vashuthegreat/vexpress";

const router = new Router();

router.get(
  "/",
  expressRepre(
    {
      summary: "Get all users",
      query: { page: 1, limit: 10 },
      response: "Array of users",
    },
    (req, res) => {
      res.json({ users: [] });
    }
  )
);

router.post(
  "/",
  expressRepre(
    {
      summary: "Create user",
      body: { name: "John Doe", email: "john@example.com" },
      response: "Created user",
    },
    (req, res) => {
      res.status(201).json(req.body);
    }
  )
);

export default router;
```

```javascript
// app.js
import { Vexpress } from "@vashuthegreat/vexpress";
import userRouter from "./routes/users.js";

const app = new Vexpress();

app.use(Vexpress.json());
app.use("/api/users", userRouter);

app.setupDocs();

app.listen(3000);
```

## 🎨 Documentation Features

### Interactive UI

- **Expandable Endpoints** - Click to see details
- **Color-coded Methods** - GET (blue), POST (green), PUT (orange), PATCH (pink), DELETE (red)
- **Try it Out** - Execute requests directly from the browser
- **Pre-filled Examples** - Input fields auto-populated with example values
- **Type Display** - Shows detected types (string, number, boolean)
- **Response Preview** - Formatted JSON responses with syntax highlighting

### Auto Type Detection

Vexpress automatically detects types from your example values:

```javascript
params: { id: "123" }           // → id (string)
query: { page: 1, limit: 10 }   // → page (number), limit (number)
body: {
  name: "John",                 // → name (string)
  age: 25,                      // → age (number)
  active: true                  // → active (boolean)
}
```

## 🔧 Configuration

### Custom Documentation Paths

```javascript
app.setupDocs("/api-docs", "/api/openapi.json");
```

### Custom View Template

The documentation uses EJS templates. You can customize the view by modifying the template in `node_modules/@vashuthegreat/vexpress/view/openApi.ejs`.

## 🆚 Comparison with Express

| Feature              | Express | Vexpress |
| -------------------- | ------- | -------- |
| Route Definition     | ✅      | ✅       |
| Middleware Support   | ✅      | ✅       |
| Auto Documentation   | ❌      | ✅       |
| Interactive API Docs | ❌      | ✅       |
| Type Detection       | ❌      | ✅       |
| Example Values       | ❌      | ✅       |
| Try it Out Feature   | ❌      | ✅       |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC © [VashuTheGreat](https://github.com/VashuTheGreat)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@vashuthegreat/vexpress)
- [GitHub Repository](https://github.com/VashuTheGreat/ExpressDocs)
- [Report Issues](https://github.com/VashuTheGreat/ExpressDocs/issues)

## 💡 Inspiration

Inspired by FastAPI's automatic interactive documentation. Built to bring the same developer experience to the Express.js ecosystem.

---

**Made with ❤️ by VashuTheGreat**
