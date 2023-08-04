// This code snippet converts a YouTube video URL to an MP3 file and provides a download link for visitors.

// Function to extract YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Function to generate the MP3 download link
function generateMP3DownloadLink(videoId) {
  return `youtube-mp3-download1.p.rapidapi.com/${videoId}.mp3`;
}

// Example usage:
const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const videoId = getYouTubeVideoId(youtubeUrl);
const mp3DownloadLink = generateMP3DownloadLink(videoId);
console.log(mp3DownloadLink);
