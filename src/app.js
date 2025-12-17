import {Vexpress,Router,expressRepre} from "./utils/commonExporter.js";
import commonRouter from "./routers/common.route.js";

const app = new Vexpress();

app.use(Vexpress.json());

app.use("/api",commonRouter);

app.setupDocs();

export default app;


