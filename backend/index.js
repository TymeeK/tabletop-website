const express = require('express');
const bodyParser = require('body-parser');

const { close } = require('./crud.js');
const  { handleRegister } = require('./register.js');

const app = express();
const port = 3000;

app.use(bodyParser.json({ type: "application/json" }));

app.post('/register', handleRegister);

const server = app.listen(port, () => console.log(`Wedelve listening on port ${port}`));
