const express = require("express");
const cors=require('cors')
const routerRoot=require('./routes/index')
const app=express();
app.use(cors())
app.use(express.json())



app.use("/api/v1",routerRoot)


app.listen(3000)