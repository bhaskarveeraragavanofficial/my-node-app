const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Serve static files (CSS)
app.use(express.static('public'));

// Home route → HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// About route
app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2><p>This is Bhaskar website</p>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});