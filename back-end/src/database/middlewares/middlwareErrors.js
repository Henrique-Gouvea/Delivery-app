const middlewareErrors = (error, _req, res, _next) => {
  console.log("==============================");
  console.log("MESSAGE_ERROR:", error);

  const { status, message } = error;

  if (!status) return res.status(500).json({ message });

  return res.status(status).json({ message });
};

module.exports = middlewareErrors;
