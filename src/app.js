import {App,Router,expressRepre} from "./utils/commonExporter.js";
import commonRouter from "./routers/common.route.js";

const app = new App();

app.use("/api",commonRouter);

app.setupDocs();

export default app;


