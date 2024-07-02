# DNAnexus Mathieu Vandecasteele

Some comments about what I did...

## Exercise 1

This project contains a Node.js script written in TypeScript to efficiently retrieve an arbitrary line from a very large text file. The script optimizes repeated access by creating an index of line offsets.

### Usage

There is a input_file.txt already pushed but you can generate one with

```bash
npx ts-node tests/utils/generate_large_file.ts
```

To use the script, run the following command:

```bash
npx ts-node src/index.ts <input_file_path> <line_number>
```

Example:

```bash
npx ts-node src/ex1/index.ts tests/stubs/input_file.txt 5
```

### How It Works

1. **Index Creation**: On the first run, the script creates an index file `<input_file_path>.idx` that stores the byte offsets of each line in the input file.
2. **Line Retrieval**: On subsequent runs, the script uses the index file to quickly locate and print the specified line.

### Some explanations

1. **TypeScript**: Using TypeScript ensures type safety and better development experience with modern JavaScript features.
2. **Using Fs**: The `fs` module is used to handle file operations like reading and writing files.
3. **Using Streaming**: File reading is done using streams to handle potentially very large files efficiently without loading the entire file into memory.
4. **Indexing**: The first run creates an index file mapping each line number to its byte offset, allowing for quick access in subsequent runs.

## Exercise 2

blabla
