const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// ⚠️ Move this to a .env file in production! (e.g., process.env.MONGO_URI)
mongoose.connect("mongodb+srv://LeAnn123:leannlazaro123@cluster0.8hkc2mo.mongodb.net/PortfolioFinal?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected Successfully")) 
.catch(console.error);

// --- CONTACT / PORTFOLIO SCHEMA (Existing) ---
const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   message: String
});
const User = mongoose.model("Portfolio", userSchema, "Portfolio");

app.post("/contact", async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json({ message: "Message sent successfully.", user });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// --- NEW: EVENT SCHEMA AND ROUTE ---
const eventSchema = new mongoose.Schema({
  organizer: String,
  title: String,
  date: String,
  venue: String,
  description: String
});

const Event = mongoose.model("Event", eventSchema);

app.post("/events", async (req, res) => {
    try {
      // Create and save the new event to MongoDB
      const newEvent = await Event.create(req.body);
      res.status(201).json({ message: "Event created successfully.", event: newEvent });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("The Server Successfully connected to port 5000");
});
