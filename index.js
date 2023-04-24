import express from "express";
import bodyParser from "body-parser";
import dbConfig from "./config/database.js";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// Connect to the database
const con = dbConfig.connection;
dbConfig.connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/users", usersRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello From Home page");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
