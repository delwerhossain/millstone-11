const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

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
    const doctorCollection = client.db("doctorDB").collection("doctor");
    const sevicesCollection = client.db("doctorDB").collection("sevices");


    //api setup
    app.get("/services", async (req, res) => {
      const result = await sevicesCollection.find().toArray();
      res.send(result);
    });
    //one service data
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const result = await sevicesCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });
    // get
    app.get("/doctor", async (req, res) => {
      const result = await doctorCollection.find().toArray();
      res.send(result);
    });

    // post
    app.post("/doctor", async (req, res) => {
      const newDoctor = req.body;
      const result = await doctorCollection.insertOne(newDoctor);
      res.send(result);
    });

    // delete
    app.delete("/doctor/:id", async (req, res) => {
      const id = req.params.id;
      const result = await doctorCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    // put method update method
    app.put("/doctor/:id", async (req, res) => {
      const id = req.params.id;
      const newDoctor = req.body;
      // finder data by id
      const filter = {
        _id: new ObjectId(id),
      };
      // update data
      const updateData = {
        $set: {
          name: newDoctor.name,
          email: newDoctor.email,
        },
      };
      // upsert data
      const option = { upsert: true };
      const result = await doctorCollection.updateOne(
        filter,
        updateData,
        option
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
    //     db_user=doctorMaster
    // db_pass=Q6Nzj1o3fnLaQ4fB
    // await client.close();
  }
}
run().catch(console.dir);

// routes
app.get("/", (req, res) => {
  res.send("simple CRUD");
});
app.listen(port, () => {
  console.log(`simple CRUD listening on ${port}`);
});
