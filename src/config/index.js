import { serverConfig } from "./server.config.js";
import { loggerConfig } from "./logger.config.js";

let config = { ...serverConfig, ...loggerConfig };

config.logLevel = process.env.LOG_LEVEL ?? "INFO";

export { config };
