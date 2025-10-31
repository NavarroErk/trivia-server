export const triviaQuestions = {
  easy: [
    {
      q: "What software company is headquartered in Redmond, Washington?",
      a: "Microsoft",
    },
    {
      q: "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
      a: "Palindrome",
    },
    {
      q: "What is the world’s largest retailer as of 2025?",
      a: "Walmart",
    },
    {
      q: "Which day of the week does the Jewish Sabbath begin?",
      a: "Friday",
    },
    {
      q: "What phone company produced the 3310?",
      a: "Nokia",
    },
    {
      q: "What company was initially known as 'Blue Ribbon Sports'?",
      a: "Nike",
    },
  ],
  intermediate: [
    {
      q: "Which country has the highest life expectancy as of 2025?",
      a: "Monaco",
    },
    {
      q: "What is the most common surname in the United States? ",
      a: "Smith",
    },
    {
      q: "What art form is described as 'decorative handwriting or handwritten lettering'?",
      a: "Calligraphy",
    },
    {
      q: "What is acrophobia a fear of?",
      a: "Heights",
    },
    {
      q: "What is the name of the Chinese philosophical system that emphasizes harmony with nature?",
      a: "Taoism",
    },
    {
      q: "What is the 4th letter of the Greek alphabet?",
      a: "Delta",
    },
    {
      q: "How many dots appear on a pair of dice?",
      a: "42",
    },
  ],
  difficult: [
    {
      q: "Who was the Ancient Greek God of the Sun?",
      a: "Apollo",
    },
    {
      q: "Aureolin is a shade of what color?",
      a: "Yellow",
    },
    {
      q: "How many faces does a Dodecahedron have?",
      a: "12",
    },
    {
      q: "How many minutes are in a full week?",
      a: "10,080",
    },
    {
      q: "December 26 is known by what name in Ireland?",
      a: "Saint Stephen's Day",
    },
  ],
};

export let lobbyCodesArr = [];

// const FILE_PATH = "./apidata.js";

// export function loadLobbyCodes() {
//   if (!fs.existsSync(FILE_PATH)) {
//     fs.writeFileSync(FILE_PATH, "[]");
//   }
//   const data = fs.readFileSync(FILE_PATH, "utf8");
//   return JSON.parse(data);
// }

// export function saveLobbyCodes(arr) {
//   fs.writeFileSync(FILE_PATH, JSON.stringify(arr, null, 2));
// }
