import * as fs from "fs";
import { createIndex } from "./indexer";

// Get command-line arguments for file path and line number
const inputFilePath = process.argv[2];
const lineNumber = parseInt(process.argv[3], 10);
const indexFilePath = `${inputFilePath}.idx`;

// Check if index file exists
if (!fs.existsSync(indexFilePath)) {
  console.log(`Index file not found. Creating index for ${inputFilePath}...`);
  // Create index if not found
  createIndex(inputFilePath, indexFilePath, () => {
    console.log("Index creation complete.");
    // Print the line after index creation
    printLine(inputFilePath, lineNumber, indexFilePath);
  });
} else {
  // Print the line using existing index
  printLine(inputFilePath, lineNumber, indexFilePath);
}

// Function to print the specified line from the file
function printLine(
  inputFilePath: string,
  lineNumber: number,
  indexFilePath: string
): void {
  fs.readFile(indexFilePath, "utf8", (err, data) => {
    if (err) throw err;
    const lineOffsets: number[] = JSON.parse(data);
    const offset = lineOffsets[lineNumber];
    if (offset === undefined) {
      console.log(`Line number ${lineNumber} is out of range.`);
      return;
    }
    // Create a read stream starting at the specified offset
    const stream = fs.createReadStream(inputFilePath, {
      start: offset,
      encoding: "utf8",
    });
    let line = "";
    stream.on("data", (chunk) => {
      line += chunk;
      if (line.includes("\n")) {
        stream.destroy();
        console.log(line.split("\n")[0]);
      }
    });
    stream.on("error", (err) => {
      console.error(err);
    });
  });
}
