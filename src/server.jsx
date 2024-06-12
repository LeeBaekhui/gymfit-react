const express = require('express');
const app = express();
const port = 8081;

// 라우트 설정
app.get('/api/lockers', (req, res) => {
  console.log("GET request received at /api/lockers");
  res.json([{ id: 1, name: 'Locker 1' }, { id: 2, name: 'Locker 2' }]);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
