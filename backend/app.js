import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import compression from "compression";

// Set __dirname to the current working directory
const __dirname = path.resolve();

// Dotenv configuration
dotenv.config();

// REST API object
const server = express();

// Middlewares
server.use(express.json());
server.use(compression());
server.use(cors());

// Middleware for serving static file
server.use(express.static(path.join(__dirname, "../frontend/dist")), (req, res, next) => next());

// Route for serving static file
server.get("*", (req, res) => res.sendFile(path.join(__dirname, "../frontend/dist", "index.html")));

// Environment variables
const port = process.env.PORT || 8080;
const mode = process.env.NODE_MODE;

// Server listen 
server.listen(port, () => console.log(`Server is successfully running in ${mode} on port number ${port} at base url http://localhost:${port}`));