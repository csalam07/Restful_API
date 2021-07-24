const Products = require("../models/productModel");

const productCtrl = {
  getProducts: async (req, res) => {
    const products = await Products.find();
    res.json(products);
  },
  createProduct: async (req, res) => {
    const {
      product_id,
      title,
      description,
      price,
      images,
      content,
      sizes,
      rating,
      colors,
      category,
      company,
      stock,
    } = req.body;
    const product = await Products.findOne({ product_id: product_id });
    if (product)
      return res.status(400).send({ message: "Product already exists" });
    const newProduct = new Products({
      product_id,
      title,
      description,
      price,
      images,
      content,
      colors,
      description,
      sizes,
      rating,
      category,
      company,
      stock,
    });
    await newProduct.save();
    res.json({ msg: "Created a Product" });
  },

  deleteProduct: async (req, res) => {
    await Products.findByIdAndDelete(req.params.id);

    res.json({ msg: "Deleted a Product" });
  },
  updateProduct: async (req, res) => {
    const {
      product_id,
      title,
      description,
      price,
      images,
      content,
      sizes,
      rating,
      colors,
      category,
      company,
      stock,
    } = req.body;
    await Products.findOneAndUpdate(
      { _id: req.params.id },
      {
        product_id,
        title,
        description,
        price,
        images,
        content,
        colors,
        description,
        sizes,
        rating,
        category,
        company,
        stock,
      },
    );
    res.json({ msg: "Updated a Product" });
  },
  getProduct: async (req, res) => {
    const product = await Products.findById(req.params.id);
    res.json(product);
    res.json({ msg: "Get a Product" });
  },
};

module.exports = productCtrl;
