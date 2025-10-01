import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// TODO: Add rate limiting middleware
// TODO: Add authentication middleware (JWT)

// API versioning
const apiV1 = express.Router();

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Despro backend 🚀" });
});

// Mount API v1 routes
app.use("/api/v1", apiV1);

// Example API route (moved to v1)
apiV1.get("/data", (req, res) => {
  res.json({ sensor: "temperature", value: 27.5 });
});

// Dashboard data route (moved to v1)
apiV1.get("/dashboard", (req, res) => {
  res.json({
    mealsProvided: 12847,
    co2Saved: 892,
    peopleHelped: 5432,
    volunteers: 234
  });
});

// Placeholder routes for key API endpoints
// TODO: Implement proper data models and database integration

// Get all smart boxes
apiV1.get("/boxes", (req, res) => {
  // Placeholder response
  res.json({
    boxes: [
      {
        id: 1,
        location: "Jakarta",
        temperature: 25.5,
        humidity: 60,
        status: "active"
      }
    ]
  });
});

// Create new alert
apiV1.post("/alerts", (req, res) => {
  // Placeholder response
  const alert = req.body;
  res.status(201).json({
    message: "Alert created",
    alert: { id: Date.now(), ...alert }
  });
});

// TODO: Add WebSocket support for real-time updates
// Example: const io = require('socket.io')(server);
// io.on('connection', (socket) => { ... });

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
