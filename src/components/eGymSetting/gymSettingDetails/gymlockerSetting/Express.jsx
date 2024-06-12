const express = require('express');
const app = express();
const port = 8081;

app.get('/api/lockers', (req, res) => {
  res.json([{ id: 1, name: 'Locker 1' }, { id: 2, name: 'Locker 2' }]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
