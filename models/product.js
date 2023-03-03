const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  qtes: { type: Number, required: true },
  description:String,
  category: [String],
  size: [String],
  color: [String],
  disponible: { type: Boolean, default: true },
  img: String,
  imgs: [String],
  reviews: [{ type: mongoose.Types.ObjectId, ref: "review" }],
});
const product = mongoose.model("product", productschema);
module.exports = product;
