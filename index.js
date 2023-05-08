const http = require("http");

function requestController() {
  console.log("Hola mundo!!!!");
}

const server = http.createServer(requestController);
server.listen(4000);
