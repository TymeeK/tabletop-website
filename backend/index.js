import express from 'express'
import {registerRoute} from './register.js'

const app = express();
const port = 3000;

app.post('/register', registerRoute);

const server = app.listen(port, () => console.log(`Wedelve listening on port ${port}`));
