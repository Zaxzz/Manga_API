const ApiKey = require("./middleware/apiKeyMiddleware");
const express = require("express");
const bodyParser = require("body-parser");
const mangaRouter = require("./routes/mangaRouter");
const mangaListRouter = require("./routes/mangaListRouter");
const mangaSearch = require("./routes/mangaSearch");

const app = express();
app.use(bodyParser.json());
require('dotenv').config();

// Middleware
app.use(ApiKey);

// Rute API
app.use("/api/manga", mangaRouter);
app.use("/api/mangaList", mangaListRouter);
app.use("/api/search", mangaSearch);

// Rute untuk menampilkan pesan "sukses dirunning"
app.get('/status', (req, res) => {
    res.send('sukses dirunning'); // Pesan yang ditampilkan di layar
}); 

// Mulai server
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT} 🎉✨ `);
});
