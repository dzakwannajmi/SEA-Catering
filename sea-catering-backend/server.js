require("dotenv").config();
const express = require("express");
const cors = require("cors");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Tes endpoint
app.get("/", (req, res) => {
  res.send("SEA Catering Backend Running!");
});

// Route utama untuk subscription
app.use("/api", subscriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
