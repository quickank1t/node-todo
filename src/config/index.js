import { serverConfig } from "./server.config.js";
import { loggerConfig } from "./logger.config.js";

const config = { ...serverConfig, ...loggerConfig };

export { config };
