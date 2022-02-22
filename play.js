const {connect} = require("./client");//requiring functions from client file
const {setupInput} = require("./input");//requiring functions from input file
const conn = connect();
setupInput(conn);//updated to pass the object returned from connect





