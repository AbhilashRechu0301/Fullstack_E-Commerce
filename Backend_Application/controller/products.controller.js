var ProductModel = require("../model/products");

exports.addProduct = async function (req, res) {
  var product = req.body;
  console.log("product", product);
  var ProductModelObject = new ProductModel(product);
  try {
    var response = await ProductModelObject.save(product);
    console.log(response);
    if (response instanceof Error) {
      res.status(500).send({
        statusCode: 500,
        message: "adding the product is failed",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        message: "product added successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProducts = async function (req, res) {
  var response = await ProductModel.find();
  console.log(response);
  res.send(response);
};

exports.updateProduct = async function (req, res) {
  var productId = req.params.id;
  var body = req.body;
  var response = await ProductModel.findOneAndUpdate(
    { productId: productId },
    body
  );
  console.log(response);
  if (response == null) {
    res.status(404).send({
      statusCode: 404,
      message: "product not found"
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      message: "updated successfully"
    });
  }
};

exports.deleteProduct = async function (req, res) {
  var productId = req.params.id;
  var response = await ProductModel.findOneAndDelete({
    productId: productId
  });
  console.log(response);
  if (response == null) {
    res.status(500).send({
      statusCode: 500,
      message: "unable to delete"
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      message: "product deleted successfully"
    });
  }
};

exports.singleProduct = async function (req, res) {
  var productId = req.params.id;
  var response = await ProductModel.findOne({
    productId: productId
  });
  console.log(response);
  if (response == null) {
    res.status(404).send({
      statusCode: 404,
      message: "product not found"
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      message: "successfully retrieved",
      product: response
    });
  }
};
