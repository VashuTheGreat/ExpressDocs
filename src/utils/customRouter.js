import express from "express";
class Router {
  constructor() {
    this.basePath = "";
    this.routes = [];
    this.ExpressRouter = express.Router();
  }

  use(path, middlewareOrRouter) {
    if (middlewareOrRouter instanceof Router) {
      middlewareOrRouter.basePath =
        this.basePath + normalize(path);
    }
    this.ExpressRouter.use(path, middlewareOrRouter.ExpressRouter);
  }

  get(path, ...handlers) {
    this.ExpressRouter.get(path, ...handlers);
    this._register("get", path, handlers);

  }

  post(path, ...handlers) {
    this.ExpressRouter.post(path, ...handlers);
    this._register("post", path, handlers);
  }

  put(path, ...handlers) {
    this.ExpressRouter.put(path, ...handlers);
    this._register("put", path, handlers);
  }

  patch(path, ...handlers) {
    this.ExpressRouter.patch(path, ...handlers);
    this._register("patch", path, handlers);
  }

  delete(path, ...handlers) {
    this.ExpressRouter.delete(path, ...handlers);
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
}

function normalize(path) {
  return path.startsWith("/") ? path : "/" + path;
}

export default Router;
