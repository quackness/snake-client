const {connect} = require("./client");
const conn = connect();

// setup interface to handle user input from stdin
const handleUserInput = function(key) {//specified that the program should exit with a keyboard shortcut
  if (key === '\u0003') {//ctr+c key
    process.exit();//terminate
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);//callback
  return stdin;
};
setupInput();





