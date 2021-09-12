const dotenv = require("dotenv");
const http = require("http");
const app = require("./app");

dotenv.config();
const PORT = process.env.PORT || 8000;

http.createServer(app).listen(PORT, () => {
  console.log(`Server Running => ${PORT}`);
});
