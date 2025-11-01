import express from "express";
import http from "http";
// import { clearInterval } from "timers";
import { WebSocketServer } from "ws";
import cors from "cors";
// import { triviaQuestions } from "./apidata.js";
import {
  generateLobbyCode,
  getTriviaByDifficultyFromJsonFile,
  getTriviaFromJsonFile,
} from "./functions.js";
// import { loadLobbyCodes, saveLobbyCodes } from "./apidata.js";

const app = express();
// let lobbyCodesArr = loadLobbyCodes();
app.use(cors());
// Create http server, pass Express app as listener
const server = http.createServer(app);
// Create wsserver and attach to shared HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client Connected");
  // console.log(triviaQuestions.easy);

  ws.on("message", (data) => {
    console.log(data);
    ws.send("hi from server");
  });
});

server.listen(3000, () => {
  console.log("Server listening on port: 3000");
});

app.get("/api/trivia-data", (req, res) => {
  const triviaData = getTriviaFromJsonFile();
  console.log(triviaData);
  res.json(triviaData);
});

app.get("/api/trivia-data/:difficulty", (req, res) => {
  const difficulty = req.params.difficulty;
  const triviaData = getTriviaByDifficultyFromJsonFile();

  res.json(triviaData);
});

app.get("/api/lobby-code", (req, res) => {
  let lobbyCode = generateLobbyCode();
  console.log(lobbyCode);
  res.json(lobbyCode);
});
