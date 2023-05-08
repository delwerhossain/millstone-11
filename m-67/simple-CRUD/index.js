const express = require('express')
const cors = require('cors');
const app = express();

// middleware
app.use(cors());
app.use(express.json());



// mongo db
// delwerhossain006
// X5dUy2DhWOfeL9W6


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://delwerhossain006:X5dUy2DhWOfeL9W6@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// port 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    app.send('simple CRUD')
})

app.listen(port, () => {
    console.log(`simple CRUD listening on ${port}`);
 });