import { join } from 'path';
import { createReadStream } from 'fs';

const read = async () => {
  const toRead = join(import.meta.dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(toRead, 'utf-8');
  stream.pipe(process.stdout);
};

await read();
