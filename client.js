// connect module
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
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