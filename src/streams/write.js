import { join } from 'path';
import { createWriteStream } from 'fs';

const write = async () => {
  const toWrite = join(import.meta.dirname, 'files', 'fileToWrite.txt');
  const stream = createWriteStream(toWrite, 'utf-8');

  process.stdin.pipe(stream);
};

await write();
