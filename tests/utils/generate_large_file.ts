import * as fs from "fs";

function generateRandomWord(length: number): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const filePath = "input_file.txt";
const lines = 1000000; // Number of lines to generate

const stream = fs.createWriteStream(filePath, { flags: "w" });

for (let i = 0; i < lines; i++) {
  stream.write(`${i}${generateRandomWord(5)}\n`);
}

stream.end(() => {
  console.log(`Generated ${lines} lines in ${filePath}`);
});
