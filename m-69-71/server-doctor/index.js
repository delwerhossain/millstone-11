const express = require("express");
const cors = require("cors");
//jwt
const jwt = require("jsonwebtoken");
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

// verify JWT
const verifyJwt = (req, res, next) => {
  // console.log(req.headers.authorization);
  const jwtAuthorization = req.headers.authorization;
  if (!jwtAuthorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  const token = jwtAuthorization.split(" ")[1];
  // console.log("-----------", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res
        .status(403)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

// api connection with MongoClient
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const doctorCollection = client.db("doctorDB").collection("doctor");
    const sevicesCollection = client.db("doctorDB").collection("sevices");
    const bookingsCollection = client.db("doctorDB").collection("bookings");

    /////////////////////////////////////////////////////////////////////////
    //////////////////////// api setup /////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    //jwt authorization
    try {
      app.post("/jwt", async (req, res) => {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1h",
        });
        res.send({ token });
      });
    } catch (error) {
      console.log(error);
    }

    try {
      // service get api
      app.get("/services", async (req, res) => {
        const result = await sevicesCollection.find().toArray();
        res.send(result);
      });
    } catch (error) {
      console.log(error);
    }
   
    //one service data
   try {
     app.get("/services/:id", async (req, res) => {
       const id = req.params.id;
       const options = {
         projection: {
           title: 1,
           img: 1,
           price: 1,
           service_id: 1,
         },
       };
       const result = await sevicesCollection.findOne(
         {
           _id: new ObjectId(id),
         },
         options
       );
       res.send(result);
     });    
   } catch (error) {
    console.log(error);
   }

    /////////////////////////////////////////////////////////////////////////
    //////////////////////// bookings api setup ////////////////////////////
    ///////////////////////////////////////////////////////////////////////

  try {
      app.get("/bookings", verifyJwt, async (req, res) => {
        const decoded = req.decoded;
        console.log("came back to bookings --", decoded);
        if (decoded.email !== req.query.email) {
          return res.send({
            error: 1,
            message: "forbidden access to bookings",
          });
        }
        let query = {};
        if (req.query?.email) {
          query = { email: req.query.email };
        }
        const result = await bookingsCollection.find(query).toArray();
        res.send(result);
      });
  } catch (error) {
    console.log(error);
  }
    //bookings post
    try {
      app.post("/bookings", async (req, res) => {
        const bookings = req.body;
        const result = await bookingsCollection.insertOne(bookings);
        res.send(result);
      });
    } catch (error) {
      console.log(error);
    }
    // delete bookings
 
    try {
         app.delete("/bookings/:id", async (req, res) => {
           const id = req.params.id;
           const deletedBookings = await bookingsCollection.deleteOne({
             _id: new ObjectId(id),
           });
           res.send(deletedBookings);
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
    //     db_user=doctorMaster
    // db_pass=Q6Nzj1o3fnLaQ4fB
    // await client.close();
  }
}
run().catch(console.dir);

// routes
app.get("/", (req, res) => {
  res.send("simple car doctor CRUD");
});
app.listen(port, () => {
  console.log(`simple CRUD listening on ${port}`);
});
