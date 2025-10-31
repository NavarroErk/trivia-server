import { WebSocketServer } from "ws";

export function startWSServer() {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", function connection(ws) {
    console.log("Client connected");

    ws.on("message", function message(data) {
      console.log(`Received: ${data}`);
      ws.send(`Server received: ${data}`);
    });
    ws.send("Welcome to the WebSocket server!");

    let count = 0;
    let msgInterval = setInterval(() => {
      ws.send(`Still connected ${++count}`);
    }, 1000);

    setTimeout(() => {
      clearInterval(msgInterval);
    }, 10000);

    ws.on("close", function close() {
      console.log("Client disconnected");
    });

    ws.on("error", function error(err) {
      console.error("WebSocket error:", err);
    });
  });
}
