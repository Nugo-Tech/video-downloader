const { exec } = require("child_process");
const path = require("path");

// Get the absolute path to the 'downloads' folder
const downloadsPath = path.resolve(__dirname, "./downloads");

// Determine the command based on the OS
const open =
  process.platform === "win32"
    ? `start "" "${downloadsPath}"`
    : process.platform === "darwin"
    ? `open "${downloadsPath}"`
    : `xdg-open "${downloadsPath}"`;

// Export a function that executes the command when called
module.exports = () => {
  exec(open, (error) => {
    if (error) {
      console.error("Error opening the downloads folder:", error.message);
    } else {
      console.log("Downloads folder opened successfully.");
    }
  });
};
