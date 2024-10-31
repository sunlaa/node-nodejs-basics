import { join } from 'path';
import { writeFile } from 'fs/promises';

const create = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fresh.txt');

  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      throw new Error(err);
    }
  }
};

await create();
