# 🚀 Vexpress - Express with Auto Documentation

**FastAPI-style Interactive API Documentation for Express.js**

[![npm version](https://img.shields.io/npm/v/@vashuthegreat/vexpress.svg)](https://www.npmjs.com/package/@vashuthegreat/vexpress)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Vexpress is a lightweight wrapper around Express.js that automatically generates beautiful, interactive API documentation similar to FastAPI's Swagger UI. Write your Express routes as usual, add metadata, and get instant documentation!

## 📦 NPM Package

**Install from NPM**: https://www.npmjs.com/package/@vashuthegreat/vexpress

```bash
npm install @vashuthegreat/vexpress
```

## 📂 Repository Structure

This repository contains:

- **`Vexpress/`** - The actual NPM package source code

  - Contains the core library code
  - Published to NPM as `@vashuthegreat/vexpress`
  - Includes documentation generation logic and UI

- **`testVexpress/`** - Example/Demo application

  - Shows how to use the Vexpress package
  - Complete working example with routes, controllers, and documentation
  - Run this to see Vexpress in action!

- **`src/`** - Original development files (legacy)
  - Initial development and testing code
  - Reference implementation

## 🚀 Quick Start

### Installation

```bash
npm install @vashuthegreat/vexpress
```

### Basic Usage

```javascript
import { Vexpress, expressRepre } from "@vashuthegreat/vexpress";

const app = new Vexpress();

app.use(Vexpress.json());

// Define routes with documentation
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

// Setup documentation endpoints
app.setupDocs(); // Adds /docs and /openapi.json

app.listen(3000, () => {
  console.log("Server: http://localhost:3000");
  console.log("Docs: http://localhost:3000/docs");
});
```

Visit `http://localhost:3000/docs` to see your interactive API documentation! 🎉

## 🧪 Running the Demo

To see Vexpress in action, run the demo application:

```bash
# Navigate to the demo folder
cd testVexpress

# Install dependencies
npm install

# Link the local Vexpress package (for development)
npm link ../Vexpress

# Run the demo
npm run dev
```

Then visit:

- **API Server**: http://localhost:3000
- **Interactive Docs**: http://localhost:3000/docs
- **OpenAPI JSON**: http://localhost:3000/openapi.json

## ✨ Features

- 🎨 **Beautiful Interactive Docs** - FastAPI-style documentation UI
- 🔄 **Auto Type Detection** - Automatically infers types from example values
- 📝 **Pre-filled Examples** - Input fields come with example values
- 🔌 **Drop-in Replacement** - 100% Express-compatible with Proxy pattern
- 🧪 **Try it Out** - Test endpoints directly from the browser
- 🎯 **Zero Config** - Works out of the box with minimal setup
- 📦 **Lightweight** - Only 5.8 kB package size

## 📖 Documentation

For complete documentation, API reference, and examples, see:

- [NPM Package README](https://www.npmjs.com/package/@vashuthegreat/vexpress)
- [Vexpress/README.md](./Vexpress/README.md)

## 🎯 Example Routes

The demo application (`testVexpress/`) includes examples of:

- **GET** requests with path and query parameters
- **POST** requests with JSON body
- **PUT/PATCH** requests for updates
- **DELETE** requests
- Nested routes and routers
- Auto-generated documentation for all endpoints

Check out `testVexpress/src/` for complete examples!

## 🛠️ Development

### Project Structure

```
JSDocs/
├── Vexpress/              # NPM Package Source
│   ├── index.js           # Package entry point
│   ├── package.json       # Package configuration
│   ├── README.md          # Package documentation
│   ├── utils/             # Core utilities
│   │   ├── customExpress.js    # Vexpress class
│   │   ├── customRouter.js     # Router class
│   │   ├── expressRepre.js     # Decorator
│   │   └── commonExporter.js   # Exports
│   └── view/              # Documentation UI
│       └── openApi.ejs    # Interactive docs template
│
├── testVexpress/          # Demo Application
│   ├── src/
│   │   ├── app.js         # App setup
│   │   ├── index.js       # Server entry
│   │   ├── routers/       # Route definitions
│   │   └── controllers/   # Route handlers
│   └── package.json
│
└── src/                   # Legacy/Development files
```

### Building and Publishing

```bash
# Navigate to package folder
cd Vexpress

# Update version
npm version patch  # or minor, major

# Publish to NPM
npm publish --access public
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

ISC © [VashuTheGreat](https://github.com/VashuTheGreat)

## 🔗 Links

- **NPM Package**: https://www.npmjs.com/package/@vashuthegreat/vexpress
- **GitHub Repository**: https://github.com/VashuTheGreat/ExpressDocs
- **Report Issues**: https://github.com/VashuTheGreat/ExpressDocs/issues

## 💡 Inspiration

Inspired by FastAPI's automatic interactive documentation. Built to bring the same developer experience to the Express.js ecosystem.

---

**Made with ❤️ by VashuTheGreat**
