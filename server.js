const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/rates.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'rates.json'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});