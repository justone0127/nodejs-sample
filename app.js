const express = require('express');
const app = express();

let currentColor = 'blue'; // 초기 색상 설정

// 메인 페이지
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Hello World</title>
                <style>
                    body {
                        background-color: ${currentColor};
                        color: white;
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <h1>Hello, OpenShift!</h1>
                <p>Current background color is: <b>${currentColor}</b></p>
            </body>
        </html>
    `);
});

// 색상 변경 API
app.get('/set-color/:color', (req, res) => {
    const newColor = req.params.color;
    if (['blue', 'green'].includes(newColor)) {
        currentColor = newColor;
        res.send(`Color changed to ${newColor}`);
    } else {
        res.status(400).send('Invalid color. Use "blue" or "green".');
    }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

