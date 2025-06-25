const express = require("express");
const router = express.Router();
const { createSubscription } = require("../controllers/subscriptionController");

router.post("/subscribe", createSubscription);

module.exports = router;

// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", subscriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
