require("marko/node-require"); // Allow Node.js to require and load `.marko` files

var express = require("express");
var markoExpress = require("marko/express");
var index = require("./src/pages/index");

var isProduction = process.env.NODE_ENV === "production";

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require("lasso").configure({
  plugins: [
    "lasso-marko" // Allow Marko templates to be compiled and transported to the browser
  ],
  outputDir: __dirname + "/static", // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction // Only add fingerprints to URLs in production
});

var app = express();

app.use(require("lasso/middleware").serveStatic());
app.use(markoExpress()); //enable res.marko(template, data)

app.get("/", function(req, res) {
  res.marko(index, {});
});

app.listen(8080);
