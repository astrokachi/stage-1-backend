const express = require('express');
const app = express();
const PORT = 3000;

// app.use(express.json());

app.get('/', (req, res) => {
  res.json({ slackUsername: 'Kachi', backend: true, age: 21, bio: "Hi, i'm a worldclass software engineer" });
});

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
