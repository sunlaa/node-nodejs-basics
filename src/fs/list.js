import { join } from 'path';
import { readdir } from 'fs/promises';

const list = async () => {
  const toRead = join(import.meta.dirname, 'files');

  try {
    const files = await readdir(toRead);

    console.log(files);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw new Error(err);
  }
};

await list();
