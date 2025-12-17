import express from "express";
import Router from "./customRouter.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
  constructor(basePath = "") {
    this.basePath = basePath;
    this.routes = [];
    this.ExpressApp = express();
    
    this.ExpressApp.set('view engine', 'ejs');
    this.ExpressApp.set('views', path.join(__dirname, '../view'));
    
    // Return a Proxy to auto-forward missing methods to ExpressApp --Ai generated suggestion
    return new Proxy(this, {
      get(target, prop) {
        // If property exists on our custom class, use it
        if (prop in target) {
          return target[prop];
        }
        
        // Otherwise, forward to ExpressApp
        const expressProp = target.ExpressApp[prop];
        
        // If it's a function, bind it to ExpressApp
        if (typeof expressProp === 'function') {
          return expressProp.bind(target.ExpressApp);
        }
        
        // Otherwise return the property value
        return expressProp;
      }
    });
  }

  use(path, middlewareOrRouter) {
    // handling app.use(middleware)
    if(typeof path === "function"){
        this.ExpressApp.use(path)
        return;
      
    }
    if (middlewareOrRouter instanceof Router) {
      middlewareOrRouter.routes = middlewareOrRouter.routes.map(route => {
        return {
          ...route,
          path: this.basePath + normalize(path) + route.path
        }
      })
      this.routes.push(...middlewareOrRouter.routes);
      this.ExpressApp.use(path, middlewareOrRouter.ExpressRouter);
    } else {
      this.routes.push({
        method: 'use',
        path: normalize(path),
        meta: middlewareOrRouter._config || {}
      });
      this.ExpressApp.use(path, middlewareOrRouter);
    }
  }

  get(path, ...handlers) {
    this.ExpressApp.get(path,...handlers);
    this._register("get", path, handlers);
  }

  post(path, ...handlers) {
    this.ExpressApp.post(path,...handlers);
    this._register("post", path, handlers);
  }
   put(path, ...handlers) {
    this.ExpressApp.put(path, ...handlers);
    this._register("put", path, handlers);
  }

  patch(path, ...handlers) {
    this.ExpressApp.patch(path, ...handlers);
    this._register("patch", path, handlers);
  }

  delete(path, ...handlers) {
    this.ExpressApp.delete(path, ...handlers);
    this._register("delete", path, handlers);
  }


  _register(method, path, handlers) {
    const finalPath = this.basePath + normalize(path);

    const lastHandler = handlers[handlers.length - 1];

    this.routes.push({
      method,
      path: finalPath,
      meta: lastHandler._config || {}
    });
  }

  static json(...args) {
  return express.json(...args);
}

static urlencoded(...args) {
  return express.urlencoded(...args);
}

static static(...args) {
  return express.static(...args);
}


  listen(PORT,callback){
    this.ExpressApp.listen(PORT,callback)
  }

  getOpenapi() {
    return this.routes;
  }

  setupDocs(docsPath = "/docs", openapiPath = "/openapi.json") {
    // Serve OpenAPI JSON
    this.ExpressApp.get(openapiPath, (req, res) => {
      res.json(this.routes);
    });

    // Serve EJS documentation page
    this.ExpressApp.get(docsPath, (req, res) => {
      res.render('openApi', { openapiPath });
    });
  }


}

function normalize(path) {
  return path.startsWith("/") ? path : "/" + path;
}

export default App;

