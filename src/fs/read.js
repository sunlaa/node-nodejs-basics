import { join } from 'path';
import { readFile } from 'fs/promises';

const read = async () => {
  const toRead = join(import.meta.dirname, 'files', 'fileToRead.txt');

  try {
    const result = await readFile(toRead, 'utf8');

    console.log(result);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw new Error(err);
  }
};

await read();
