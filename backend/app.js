import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import compression from "compression";
import testRoute from "./src/routes/test.route.js";

// Set __dirname to the current working directory
const __dirname = path.resolve();

// Dotenv configuration
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// REST API object
const server = express();

// Middlewares
server.use(express.json());
server.use(compression());
server.use(cors());

// Test route
server.use("/api/v1", testRoute);

// Middleware for serving static files from the frontend's dist folder
server.use(express.static(path.join(__dirname, "../frontend/dist")), (req, res, next) => next());

// Route for serving the frontend's index.html for any other route
server.get("*", (req, res) => res.sendFile(path.join(__dirname, "../frontend/dist", "index.html")));

// Environment variables
const port = process.env.PORT;
const mode = process.env.NODE_MODE;

// Server listen 
server.listen(port, () => console.log(`Server is successfully running in ${mode} on port number ${port} at base url http://localhost:${port}`));