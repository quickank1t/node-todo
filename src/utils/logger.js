import log from "loglevel";
import { config } from "../config/index.js";

log.setLevel(config.logLevel);

export { log };
