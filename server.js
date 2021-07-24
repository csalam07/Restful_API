require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRouter");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// coonnect mongodb
const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },

  (err) => {
    if (err) throw err;
    console.log("connected to mongodb");
  },
);
