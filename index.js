// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Declare routes right here
// const routes = require('./routes/api-users-routes.js');
// app.use(routes);
require("./routes/api-users-routes.js")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Port started on port: ' + PORT));



