const express = require('express');
const path = require('path');
const { Vimeo } = require('vimeo');
const dotenv = require('dotenv');

// Load environment variables from .env file in development
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve all static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Vimeo client using credentials stored in environment variables
const vimeoClient = new Vimeo(
  process.env.VIMEO_CLIENT_ID,
  process.env.VIMEO_CLIENT_SECRET,
  process.env.VIMEO_ACCESS_TOKEN
);

// Endpoint to create a Vimeo upload ticket using the TUS approach
app.post('/api/create-vimeo-upload', (req, res) => {
  const { videoSize } = req.body;
  if (!videoSize) {
    return res.status(400).json({ error: 'Missing video size' });
  }
  vimeoClient.request(
    {
      method: 'POST',
      path: '/me/videos',
      query: {
        upload: {
          approach: 'tus',
          size: videoSize,
        },
        name: 'New Course Video',
        // Disable viewing until explicitly enabled
        privacy: { view: 'disable' },
      },
    },
    (error, body) => {
      if (error) {
        console.error('Vimeo upload ticket error:', error);
        return res.status(500).json({ error: 'Failed to create upload ticket' });
      }
      const uploadLink = body.upload && body.upload.upload_link;
      const videoUri = body.uri;
      if (!uploadLink || !videoUri) {
        return res.status(500).json({ error: 'Invalid response from Vimeo' });
      }
      return res.json({ upload_link: uploadLink, video_uri: videoUri });
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
