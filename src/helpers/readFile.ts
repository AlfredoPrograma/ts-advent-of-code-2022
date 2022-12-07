const { readFileSync } = Deno;

const readFile = (path = 'input.txt') => {
  const decoder = new TextDecoder('utf-8');
  const fileInput = readFileSync(path);
  const inputString = decoder.decode(fileInput)

  return inputString
}

export { readFile }

