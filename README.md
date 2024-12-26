# Batch Video Downloader

This project allows you to batch download Facebook videos and automatically open the downloads folder once the downloads are complete. It uses Node.js to handle the batch downloads and open the local `downloads` folder.

## Features

- **Batch Download**: Download multiple videos from Facebook in one go.
- **Auto Open Folder**: Once all downloads are completed, the `downloads` folder is automatically opened.
- **Cross-Platform**: Works on Windows, macOS, and Linux.

## Requirements

- Node.js (v14 or higher)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### 1. Add the List of Video URLs

- Add your Facebook video URLs in the `index.js` where the batch download process is handled.
- Replace the sample batch download code with actual logic to download the videos.

### 2. Run the Script

To run the script and start the batch download process, use the following command:

```bash
npm run start
```

Once the download completes, the `downloads` folder will automatically open.

### 3. (Optional) Open the Downloads Folder Manually

If you just want to open the `downloads` folder at any time, you can use the following command:

```bash
npm run open
```

This will open the `downloads` folder in the local directory.

## How It Works

- **Batch Download**: The `index.js` handles the video download logic. You can integrate a download library like `youtube-dl-exec` or any other tool.
- **Folder Opening**: The `utils/openDownloads.js` module is used to open the `downloads` folder automatically after the batch download completes. It works cross-platform (Windows, macOS, and Linux).

## Contributing

If you'd like to contribute, feel free to open an issue or create a pull request.
