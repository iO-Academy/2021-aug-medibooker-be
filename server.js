const express = require('express');
const routes = require('./Config/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Add all routes to app
routes(app);

// PORT
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server listening to port ${port}`));
