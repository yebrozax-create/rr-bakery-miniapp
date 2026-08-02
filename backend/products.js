const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    name: "White Bread",
    price: 2.50,
    category: "Bread"
  },
  {
    id: 2,
    name: "Croissant",
    price: 1.80,
    category: "Pastry"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    price: 15.00,
    category: "Cake"
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
