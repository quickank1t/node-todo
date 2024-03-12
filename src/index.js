import "dotenv/config";
import express from "express";
import cors from "cors";
import { log } from "./utils/logger.js";
import { config } from "./config/index.js";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

log.trace(config);

app.listen(config.port, () => {
  log.info("started server on port " + config.port);
});
