const sendError = (status, message) => ({
  error: { status, message },
});

module.exports = sendError;
