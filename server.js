const express = require('express');
const routes = require('./Config/routes');
const cors = require('cors');

const app = express();

app.use(cors());

// Add all routes to app
routes(app);

// PORT
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server listening to port ${port}`));
