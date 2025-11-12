function globalErrorHandler(err, req, res, next) {
  console.error(err); // minimal logging for debugging
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // in dev we can include stack
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
  });
}

module.exports = { globalErrorHandler };
