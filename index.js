const http = require("http");

function requestController() {
  console.log("Hola mundo!!!!");
}

const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(4000, function () {
  console.log({ env: process.env });
});
