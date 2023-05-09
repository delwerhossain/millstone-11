const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://delwerhossain006:X5dUy2DhWOfeL9W6@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db('usersDB').collection('users');

    
    app.post('/users', async(req, res) => {
        const user = req.body;
        console.log('new user', user);
        const result = await userCollection.insertOne(user);
        res.send(result);
    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
  
//home
app.get("/", (req, res) => {
  res.send("simple CRUD");
});
app.listen(port, () => {
  console.log(`simple CRUD listening on ${port}`);
});
