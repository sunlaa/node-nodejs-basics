import { join } from 'path';
import { access, rename as fsRename } from 'fs/promises';

const isPathExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const oldName = join(import.meta.dirname, 'files', 'wrongFilename.txt');
  const newName = join(import.meta.dirname, 'files', 'properFilename.md');

  const isRenamed =
    !(await isPathExist(oldName)) || (await isPathExist(newName));

  if (isRenamed) {
    throw new Error('FS operation failed');
  } else {
    fsRename(oldName, newName);
  }
};

await rename();
