const express = require("express");

const app = express();
let currentColor = "#add8e6"; // 초기 배경 색상 (연한 파란색)

// 메인 라우트
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello KECO</title>
        <style>
          body {
            background-color: ${currentColor};
            color: #000; /* 검정색 텍스트 */
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 50px;
          }
          h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Hello, KCEO!</h1>
        <p>Current background color: <strong>${currentColor}</strong></p>
      </body>
    </html>
  `);
});

// 색상 변경 API
app.get("/set-color/:color", (req, res) => {
  const newColor = req.params.color;
  const validColors = {
    blue: "#add8e6",    // 연한 파란색
    green: "#90ee90",   // 연한 녹색
    pink: "#ffb6c1",    // 연한 분홍색
    yellow: "#ffffe0",  // 연한 노란색
    lavender: "#e6e6fa" // 라벤더색
  };

  if (validColors[newColor]) {
    currentColor = validColors[newColor];
    res.send(`Color changed to ${newColor}`);
  } else {
    res.status(400).send('Invalid color! Use "blue", "green", "pink", "yellow", or "lavender".');
  }
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
