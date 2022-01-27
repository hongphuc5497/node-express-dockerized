const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const logger = require('./config/winston');

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

const port = 4000;
const host = 'localhost';

app.listen(port, () => {
	logger.info(`Server started and running on http://${host}:${port}`);
});
