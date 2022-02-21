const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {//listener for connect
    console.log("Welcome, you are connected!");
  });
  conn.on("data", (data) => {//listener for data, as a result we will see "you ded cuz you idled"
    console.log(data);
  });
  return conn;
};
console.log("Connecting ...");
connect();


