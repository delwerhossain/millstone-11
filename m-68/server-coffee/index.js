const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// process.env.mongoDB_KEY

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority`;

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
    const coffeeCollection = client.db("coffeeDB").collection("coffee");

    //insert into the collection
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // list 
    app.get("/coffee", async (req, res) => {
      const result = await coffeeCollection.find().toArray();
      res.send(result);
    });
    // delete from the collection
    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const result = await coffeeCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    })
    // update the collection
    app.put('/coffee/:id', async (req, res) => {
          const id = req.params.id;
          const newCoffee = req.body;
          const result = await coffeeCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: newCoffee }
          );
          res.send(result);
        });



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

// routes
app.get("/", (req, res) => {
  res.send("coffee CRUD");
});
app.listen(port, () => {
  console.log(`simple CRUD listening on ${port}`);
});
