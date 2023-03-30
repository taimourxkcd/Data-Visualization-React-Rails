#!/usr/bin/env node

const path = require("path");
const chokidar = require("chokidar");
const http = require("http");

module.exports = {
  entryPoints: ["app/javascript/application.js"],
  outdir: "app/assets/builds",
  bundle: true,
  minify: true,
  publicPath: "./",
  // any other esbuild options you need
};

const clients = [];

http
  .createServer((req, res) => {
    return clients.push(
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        Connection: "keep-alive",
      })
    );
  })
  .listen(8082);

async function builder() {
  let result = await require("esbuild").build({
    entryPoints: ["application.js"],
    bundle: true,
    publicPath: "/assets",
    loader: { ".js": "jsx" },
    sourcemap: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    incremental: true,
    assetNames: "[name]-[hash].digested",
    watch: process.argv.includes("--watch"),
    plugins: [],
    loader: {
      ".js": "jsx",
      ".jpg": "file",
      ".png": "file",
      ".MOV": "file",
      ".webp": "file",
    },
    banner: {
      js: ' (() => new EventSource("http://localhost:8082").onmessage = () => location.reload())();',
    },
  });
  chokidar
    .watch([
      "./app/javascript/**/*.js",
      "./app/views/**/*.html.erb",
      "./app/assets/stylesheets/*.css",
    ])
    .on("all", (event, path) => {
      if (path.includes("javascript")) {
        result.rebuild();
      }
      clients.forEach((res) => res.write("data: update\n\n"));
      clients.length = 0;
    });
}
builder();
