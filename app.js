const express = require("express");
const path = require("path");

const app = express();
let currentColor = "blue"; // 초기 배경 색상

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 메인 라우트: Hello World 페이지
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello KECO</title>
        <style>
          body {
            background-color: ${currentColor};
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
          }
          img {
            max-width: 200px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Hello, KECO!</h1>
        <p>Current background color: <strong>${currentColor}</strong></p>
        <img src="./public/logo.png" alt="KECO Logo" />
      </body>
    </html>
  `);
});

// 색상 변경 API
app.get("/set-color/:color", (req, res) => {
  const newColor = req.params.color;
  if (["blue", "green"].includes(newColor)) {
    currentColor = newColor;
    res.send(`Color changed to ${newColor}`);
  } else {
    res.status(400).send('Invalid color! Use "blue" or "green".');
  }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
