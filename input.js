let connection;//connection variable created in the outer-most scope

// setup interface to handle user input from stdin
const handleUserInput = function(key) {//processing keys pressed
  if (key === '\u0003') {//ctr+c key
    process.exit();//terminate
  } else if (key === "w") {
    connection.write("Move: up");//sending command string using connection object
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "q") {
    connection.write("Say: Go snake go!");
  } else if (key === "e") {
    connection.write("Say: Sneaky move!");
  } else if (key === "x") {
    connection.write("Say: Keep snaking!");
  }
};


const setupInput = (conn) => {//updated the function to accept a single parameter
  connection = conn;//assigned the value of the paramter to connection variable
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);//callback
  return stdin;
};


module.exports = {
  setupInput
};
