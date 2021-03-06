const { IP, PORT } = require("./constants");

const net = require("net");
// connect module
const connect = function () {
  const conn = net.createConnection({
    host: (IP),
    port: (PORT),
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log("Successfully connected!"),
    conn.write("Name: LAW")   
  })

  conn.setTimeout(5000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });
  return conn;
};


module.exports = {
connect
};