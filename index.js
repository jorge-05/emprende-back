const http = require("http");
const name = require("./another");
console.log({ name });

function requestController() {
  console.log("Hola mundo");
}

const server = http.createServer(requestController);
server.listen(4000);
