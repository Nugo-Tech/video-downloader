const { exec } = require("child_process");
const path = require("path");

// Get the absolute path to the 'downloads' folder
const downloadsPath = path.resolve(__dirname, "./downloads");

// Determine the command based on the OS
const openCommand =
  process.platform === "win32"
    ? `start "" "${downloadsPath}"`
    : process.platform === "darwin"
    ? `open "${downloadsPath}"`
    : `xdg-open "${downloadsPath}"`;

// Execute the command
exec(openCommand, (error) => {
  if (error) {
    console.error("Error opening the downloads folder:", error.message);
  } else {
    console.log("Downloads folder opened successfully.");
  }
});

module.exports = open;
