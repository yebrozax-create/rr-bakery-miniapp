const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "R&R Bakery API",
    status: "Running",
    version: "1.0.0"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`R&R Bakery API running on port ${PORT}`);
});
