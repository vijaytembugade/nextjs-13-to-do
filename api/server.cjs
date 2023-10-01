import express from 'express';
import {data} from './db/db.js';
 
const app = express();
const port = 3001;

app.get('/', (req,  res) => {
  res.json({msg: "server is running"}).status(200);
});

app.get('/tickets', (req,  res) => {
  res.json({...data}).status(200);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});