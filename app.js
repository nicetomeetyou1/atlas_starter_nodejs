const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const {Axios} = require("axios");
dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', async (req, res) => {
  try {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    await client.connect();
    console.log("Connected to MongoDB");

    const axios = await new Axios({
      baseURL: "https://reqres.in",
    }).get("/api/users?page=1");
    console.log(axios.data);
    res.json(axios.data);
  } catch (e) {
    console.error(e);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})