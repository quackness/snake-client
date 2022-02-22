const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {//listener for connect
    console.log("Welcome, you are connected!");//print a message to the screen when the connection is successfully established.
    conn.write("Name: KR");//send initials to the snake
    // conn.write("Move: up");//Sending the string as data to the server, snake moves up
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");//setTimeout as per the "Experiments"
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: up");//setInterval as per the "Experiments"
    // }, 2000);//hits the wall
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
