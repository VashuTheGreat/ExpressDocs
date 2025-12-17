import app from "./app.js";
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`📚 API Documentation available at http://localhost:${PORT}/docs`);
    console.log('Total routes registered:', app.routes.length);
    console.log('Routes:', JSON.stringify(app.routes, null, 2));
});