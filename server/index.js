const express = require('express');
const morgan = require('morgan');

const PORT = 3001;

let app = express();
app.use(morgan('combined'));

app.get('/', (_, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is lisenting on PORT: ${PORT}`);
});

