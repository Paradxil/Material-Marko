// The following line installs the Node.js require extension
// for `.marko` files.  This should be called once near the start
// of your application before requiring any `*.marko` files.
require("marko/node-require");

var fs = require("fs");

// Load a Marko view by requiring a .marko file:
var hello = require("./src/pages/index");
var out = fs.createWriteStream("./build/index.html", { encoding: "utf8" });
hello.render({}, out);
