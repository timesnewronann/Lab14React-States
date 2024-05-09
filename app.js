// Import express
import express from 'express';

// Initialize the Express app
const app = express();

// Set 'public' as the static folder
app.use(express.static('public'));

// Set up the root route
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Make the app listen on port 3000, 5000 doesn't work for me
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
