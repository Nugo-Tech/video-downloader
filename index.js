const youtubedl = require("youtube-dl-exec");
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const open = require("./open");

// Directory to save the downloaded files
const OUTPUT_DIR = path.join(__dirname, "downloads");

// Ensure the output directory exists
fs.ensureDirSync(OUTPUT_DIR);

/**
 * Validate a Facebook video URL by checking its HTTP status.
 * @param {string} url - Facebook video URL.
 * @returns {Promise<boolean>} - Resolves `true` if valid, `false` otherwise.
 */
const validateUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.status === 200;
  } catch (err) {
    console.error(`Invalid URL: ${url}`);
    return false;
  }
};

/**
 * Download a single video using youtube-dl-exec
 * @param {string} url - Facebook video URL.
 * @returns {Promise<void>} - Resolves when the video is downloaded.
 */
const downloadVideo = async (url) => {
  try {
    await youtubedl(url, {
      output: `${OUTPUT_DIR}/%(title)s.%(ext)s`,
      format: "mp4",
    });
    console.log(`Downloaded: ${url}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
    throw error;
  }
};

/**
 * Batch download videos
 * @param {string[]} urls - Array of Facebook video URLs.
 */
const batchDownload = async (urls) => {
  for (const url of urls) {
    const isValid = await validateUrl(url);
    if (isValid) {
      try {
        await downloadVideo(url);
      } catch (err) {
        console.error(`Failed to download ${url}:`, err.message);
      }
    } else {
      console.error(`Skipping invalid URL: ${url}`);
    }
  }
  console.log("Batch download complete!");
  open();
};

// Example usage
(async () => {
  const videoLinks = [
    "https://www.facebook.com/suwadiviyalk/videos/897348318686818",
    // Add more Facebook/YouTube video links here
  ];

  await batchDownload(videoLinks);
})();
