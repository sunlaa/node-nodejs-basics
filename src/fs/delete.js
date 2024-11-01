import { join } from 'path';
import { unlink } from 'fs/promises';

const remove = async () => {
  const toRemove = join(import.meta.dirname, 'files', 'fileToRemove.txt');

  try {
    await unlink(toRemove);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw new Error(err);
  }
};

await remove();
