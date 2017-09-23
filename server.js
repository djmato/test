const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

const PORT = process.env.PORT || 8888;
app.listen(PORT, ()=>console.log("server is running"));