const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: 'dev' });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);

  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
  console.log(`App running at http://localhost:${port}`);
});
