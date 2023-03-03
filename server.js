// 1 creation du serveur
const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const port = process.env.Port || 5000;
// 2 conction data base
const db = require("./config/conctiondb");
db();

//midlwareparsebody
app.use(express.json());

//Reading the image
app.use("/uploads", express.static(__dirname + "/uploads"));

// 3 definition du model
// 4 Routes
app.use("/product", require("./routes/productRoutes"));

app.use("/review", require("./routes/reviewroutes"));

app.listen(port, (e) =>
  e ? console.log(e) : console.log(`server is running on port ${port} `)
);
