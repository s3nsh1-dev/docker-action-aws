import http from "http";

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Test number - 3");
  } else if (method === "POST" && url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.end(body);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

/**
 * COMMANDS
 *
 * curl -X POST 13.233.44.118/data -d '{"name":"shubham", "age": 30}' -H "Content-Type: application/json"
 * curl http://localhost:3000
 */
