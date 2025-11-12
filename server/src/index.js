const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { globalErrorHandler } = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(morgan('dev')); // server-side logging

app.use('/api', routes);

// global error handler (important for tests and debugging)
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/mern';
  mongoose.connect(MONGO).then(() => {
    app.listen(PORT, ()=> console.log(`Server listening ${PORT}`));
  });
}

module.exports = app; // export for Supertest
