const express = require("express");
app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
// app.require(cors)
app.use(cors())

const users = [
{id: 1, email: 'rahat@gmail.com',name: 'rahat'},
{id: 2, email: 'jex@gmail.com',name: 'jex'},
{id: 3, email: 'ten@gmail.com',name: 'ten'},
]

app.get('/', (req, res) => {
    res.send('user server is running')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.listen(port, () => {
    console.log(`server listening on ${port}`);
})