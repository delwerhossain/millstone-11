const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// port 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    app.send('simple CRUD')
})

app.listen(port, () => {
    console.log(`simple CRUD listening on ${port}`);
 });