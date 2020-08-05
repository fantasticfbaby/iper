const os = require("os");
function getLocalIp() {
  const ifaces = os.networkInterfaces();
  let localIp;
  for (let dev in ifaces) {
    ifaces[dev].forEach(function(details, alias) {
      if (details.family == "IPv4" && details.address !== "127.0.0.1") {
        localIp = details.address;
      }
    });
  }
  return localIp
}

module.exports = {
  getLocalIp
}
