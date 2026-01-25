const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "../build");
const indexFile = path.join(buildDir, "index.html");
const notFoundFile = path.join(buildDir, "404.html");

fs.copyFileSync(indexFile, notFoundFile);
console.log("✔ 404.html created successfully");
