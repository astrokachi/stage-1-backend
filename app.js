const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    slackUsername: 'Kachi',
    backend: true,
    age: 21,
    bio: "Hi, i'm a worldclass software engineer",
  });
});

app.post('/', (req, res) => {
  const { operation_type, x, y } = req.body;
  if (operation_type && x && y) {
    ///////////
    if (
      operation_type === 'addition' ||
      operation_type.includes('add') ||
      operation_type.includes('addition')
    ) {
      const result = x + y;
      res.json({ slackUsername: 'astro', result, operation_type: 'addition' });
    }
    //////////
    else if (
      operation_type === 'subtraction' ||
      operation_type.includes('subtract') ||
      operation_type.includes('subtraction')
    ) {
      const result = x - y;
      res.json({
        slackUsername: 'astro',
        result,
        operation_type: 'subtraction',
      });
    }
    //////////
    else if (
      operation_type === 'multiplication' ||
      operation_type.includes('multiply') ||
      operation_type.includes('multiplication')
    ) {
      const result = x * y;
      res.json({
        slackUsername: 'astro',
        result,
        operation_type: 'multiplication',
      });
    }
  } else res.send({ msg: 'please input valid fields' });
});

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
