require('dotenv').config();
const server = require('./src/server');
const { PORT_SERVER } = process.env;

server.listen(PORT_SERVER, () => {
  console.log(`Sever raised on port: ${PORT_SERVER}. Enjoy It!`);
});
