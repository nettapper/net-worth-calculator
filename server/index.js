const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

let netWorthRouter = require('./routes/net-worth');

// consts
const PORT = 3001;
const STATIC_INDEX = path.join(__dirname, '../build/index.html');
const STATIC_FOLDER = path.join(__dirname, '../build/static');

// info
console.log(`Using STATIC_INDEX: ${STATIC_INDEX}`);
console.log(`Using STATIC_FOLDER: ${STATIC_FOLDER}`);

// create app & register middleware
let app = express();

app.use(morgan('combined'));
app.use(cors()); // allow all cross origin requests
app.use(bodyParser.json())

app.use('/static', express.static(STATIC_FOLDER));

//enable pre-flight across-the-board
app.options('*', cors()) // include before other routes

// routes handlers
app.get('/', (_, res) => {
  res.sendFile(STATIC_INDEX);
});

app.use('/api/v1/net-worth', netWorthRouter);


// start server
app.listen(PORT, () => {
  console.log(`Server is lisenting on PORT: ${PORT}`);
});

