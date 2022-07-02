const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "assets", "dist")));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'assets/dist', 'index.html'));
});

app.listen(process.env.PORT || 3004, () => console.log("Server Running..."));