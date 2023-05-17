const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const productCollection = client.db("emajohnDB").collection("products");

    // products get api
    try {
        app.get("/products", async (req, res) => {
          console.log(req.query);
          const page = parseInt(req.query.page) || 0;
          const limit = parseInt(req.query.limit) || 10;
          const skip = page * limit;

          const result = await productCollection
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
          res.send(result);
        });
    } catch (error) {
      console.log(error);
    }

    // product post by id api
    try {
      app.post("/productsById", async (req, res) => {
       const productsID = req.body;
       console.log(productsID);
      });
    } catch (error) {
      console.log(error);
    }

    // total number of products counts
    try {
      app.get("/totalProducts", async (req, res) => {
        const result = await productCollection.estimatedDocumentCount();
        res.send({ totalProducts: result });
      });
    } catch (error) {
      console.log(error);
    }

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//api
app.get("/", async (req, res) => {
  res.send("ema-jhon is awesome");
});

app.listen(port, () => {
  console.log("port listening on port - ", port);
});
