const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  try {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");

  } catch (e) {
    console.error(e);
  }
}

main()
