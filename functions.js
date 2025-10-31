import { lobbyCodesArr } from "./apidata.js";
import { triviaQuestions } from "./apidata.js";
import fs from "fs";

export function generateLobbyCode() {
  let lobbyCode = Math.floor(Math.random() * 5);

  lobbyCodesArr.forEach((code) => {
    if (lobbyCode == code) {
      generateLobbyCode();
    } else {
      lobbyCodesArr.push(lobbyCode);
    }
  });
  return [lobbyCode, lobbyCodesArr];
}

export function writeTriviaDataToJsonFile() {
  const fileName = "./data/trivia-data/trivia-qa.json";
  fs.writeFile(fileName, JSON.stringify(triviaQuestions, null, 2), (err) => {
    if (err) {
      console.error("Error writing file");
    } else {
      console.log("Successfully wrote data.");
    }
  });
}

export function getTriviaFromJsonFile() {
  try {
    const triviaData = fs.readFileSync("./data/trivia-data/trivia-qa.json");
    return JSON.parse(triviaData);
  } catch (err) {
    console.error("Error reading or parsing trivia-qa.json", err);
  }
}

export function getTriviaByDifficultyFromJsonFile(difficulty) {
  fs.readFileSync("./data/trivia-data/trivia-qa.json", "utf-8"),
    (err, data) => {
      if (err) {
        console.error("Error Reading File: trivia-qa.json");
        return;
      }
      try {
        const jsonData = JSON.parse(data); // parse the JSON string
        console.log(jsonData);
      } catch (error) {
        console.error("Error parsing JSON...", error);
      }
    };
}
