import { join } from 'path';
import { cp } from 'fs/promises';

const copy = async () => {
  const dirPath = join(import.meta.dirname, 'files');
  const copyDirPath = join(import.meta.dirname, 'files_copy');

  try {
    await cp(dirPath, copyDirPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (err) {
    if (err.code === 'ERR_FS_CP_EEXIST') {
      throw new Error('FS operation failed');
    }
    throw new Error(err);
  }
};

await copy();
