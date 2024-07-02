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

## Exercise 2

blabla
