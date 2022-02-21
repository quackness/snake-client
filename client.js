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
    console.log("Welcome, you are connected!");//Print a message to the screen when the connection is successfully established.
    conn.write('Name: KR');//send initials to the snake
  });

  conn.on("data", (data) => {//listener for data, as a result we will see "you ded cuz you idled"
    console.log(data);
  });
  return conn;
};
console.log("Connecting ...");
//connect();// we do not need this call anymore. We are calling it in another file.

module.exports = {
  connect
};
