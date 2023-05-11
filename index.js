require("dotenv").config();

const http = require("http");

function requestController() {
  console.log("Hola mundo!!!!");
}

const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(PORT, function () {
  console.log("Aplicación corriendo en puerto: " + PORT);
});
