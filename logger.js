const createLogger = () => {}

// Example usage
const errorLogger = createLogger("[ERROR]");
errorLogger.log("Something went wrong!"); // [ERROR] Something went wrong!

const warningLogger = createLogger("[WARNING]");
warningLogger.log("You are almost out of storage."); // [WARNING] You are almost out of storage.

const infoLogger = createLogger("[INFO]");
infoLogger.log("Learn more about closure at MDN."); // [INFO] Learn more about closure at MDN.
