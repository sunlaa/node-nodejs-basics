import { writeFile, access, constants } from 'node:fs';
import path from 'path';

const create = async () => {
  const filePath = path.join(import.meta.dirname, 'files', 'fresh.txt');

  access(filePath, constants.F_OK, (err) => {
    if (err) {
      writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) throw new Error(err);
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
