console.log("Server Mjs running");

// const express = require('express')// The require keyword in this line of code is of old JS that's why iw ont work on express or mjs 
import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/abc', (req, res) => {

    console.log("Request ip: ",req.ip);
  res.send('Hello World!')
})

app.get('/weather', (req, res) => {
  console.log("request ip: ", req.ip);
  // console.log("param: ", req.params.cityName);

  res.send({
      temp: 30,
      min:26,
      max:31,
      humidity: 72,
      serverTime: new Date().toString()
  });
})

const __dirname = path.resolve()

app.use('/', express.static(path.join(__dirname,'./web/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})