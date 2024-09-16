import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import cluster from "cluster";
import os from "os";
import compression from "compression";

// Directory name for serving frontend index.html file which is inside dist folder
const __dirname = path.resolve();

// Dotenv configuration
dotenv.config();

// Number of CPUs
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process is running with PID: ${process.pid}`);

  // Fork worker
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  };

  // Listen for dying workers and replace them
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
    cluster.fork();
  });

  // Workers can share any TCP connection. In this case, it is an HTTP server.
} else {
  // REST API object
  const server = express();

  // Middlewares
  server.use(express.json());
  server.use(compression());
  server.use(cors());

  // Middleware for serving frontend dist file
  server.use(express.static(path.join(__dirname, "/frontend/dist")), (req, res, next) => next());

  // Route for serving frontend index.html file which is inside dist folder
  server.get("*", (req, res) => res.sendFile(path.join(__dirname, "/frontend/dist", "index.html")));

  // Environment variables
  const port = process.env.PORT || 8080;
  const mode = process.env.NODE_MODE;

  // Server listen 
  server.listen(port, () => console.log(`Server is successfully running in ${mode} on port number ${port} at base url http://localhost:${port}`));
};