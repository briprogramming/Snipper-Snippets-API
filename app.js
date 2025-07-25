const express = require('express');
const routes = require('./routes/snippet');

const app = express();
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});