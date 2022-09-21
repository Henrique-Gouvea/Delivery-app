const port = process.env.PORT || 3001;
const app = require('./app');
const middlewareErrors = require('../database/middlewares/middlwareErrors');

app.use(middlewareErrors);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
