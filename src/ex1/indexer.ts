import * as fs from "fs";

// Function to create an index of line offsets
export function createIndex(
  inputFilePath: string,
  indexFilePath: string,
  callback: () => void
): void {
  const lineOffsets: number[] = [];
  let offset = 0;

  // Create a read stream for the input file
  const stream = fs.createReadStream(inputFilePath, { encoding: "utf8" });
  stream.on("data", (chunk) => {
    // Calculate offsets for each line break
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === "\n") {
        lineOffsets.push(offset + i + 1);
      }
    }
    offset += chunk.length;
  });

  stream.on("end", () => {
    // Write the offsets to the index file
    fs.writeFile(indexFilePath, JSON.stringify(lineOffsets), (err) => {
      if (err) throw err;
      callback();
    });
  });

  stream.on("error", (err) => {
    console.error(err);
  });
}
