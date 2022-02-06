const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db/conn');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
res.send(200,'working')
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

  app.use("/api", require("./routes/article"));
  app.use("/api", require("./routes/auth"));

  app.use("/api", require("./routes/events"));

  app.use("/api", require("./routes/project"));

  app.use("/api", require("./routes/recruitment"));

  app.use("/api", require("./routes/team"));






app.listen(port,()=>{
    console.log(`server running at port ${port}`)
});

