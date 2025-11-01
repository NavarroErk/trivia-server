import fs from "fs";

export function generateLobbyCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let lobbyCode = "";
  for (let i = 0; i < 4; i++) {
    const randomValue = Math.floor(Math.random() * chars.length);
    lobbyCode += chars[randomValue];
  }
  if (validateLobbyCode(lobbyCode) == true) {
    console.log("Code Already Exists, trying again: ");
    return generateLobbyCode();
  } else {
    const lobbyDataObj = {
      host: "",
      lobbyCode: lobbyCode,
      active: true,
    };

    writeLobbyDataToJsonFile(lobbyDataObj);
    return lobbyCode;
  }
}

function validateLobbyCode(lobbyCode) {
  const activeLobbyData = getLobbyDataFromJsonFile();

  return activeLobbyData.some((entry) => {
    if (entry.lobbyCode == lobbyCode) {
      return true;
    } else {
      return false;
    }
  });
}

function getLobbyDataFromJsonFile() {
  const fileName = "./data/lobby-codes.json";
  try {
    if (!fs.existsSync(fileName)) return [];
    const json = fs.readFileSync(fileName, "utf8") || "[]";
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (err) {
    console.error("Error reading or parsing lobby file:", err);
    return [];
  }
}

function writeLobbyDataToJsonFile(lobbyDataObj) {
  const fileName = "./data/lobby-codes.json";
  const lobbyData = getLobbyDataFromJsonFile();
  lobbyData.push(lobbyDataObj);

  try {
    fs.writeFileSync(fileName, JSON.stringify(lobbyData, null, 2));
    console.log(`Added lobby ${lobbyDataObj.lobbyCode}`);
  } catch (err) {
    console.error("Error writing lobby file:", err);
  }
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
        const jsonData = JSON.parse(data);
        console.log(jsonData);
      } catch (error) {
        console.error("Error parsing JSON...", error);
      }
    };
}
