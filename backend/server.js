import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Despro backend 🚀" });
});

// example API route
app.get("/api/data", (req, res) => {
  res.json({ sensor: "temperature", value: 27.5 });
});

// backend/server.js
app.get("/api/dashboard", (req, res) => {
  res.json({
    mealsProvided: 12847,
    co2Saved: 892,
    peopleHelped: 5432,
    volunteers: 234
  });
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
