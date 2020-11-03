const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('./config/index');

const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapError,
} = require('./utils/middleware/errorHandler');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Errors middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
