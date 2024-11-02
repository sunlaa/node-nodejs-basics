import { createGunzip } from 'zlib';
import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const unzip = createGunzip();

  const source = createReadStream(
    join(import.meta.dirname, 'files', 'archive.gz')
  );
  const destination = createWriteStream(
    join(import.meta.dirname, 'files', 'fileToCompress-1.txt')
  );

  source.pipe(unzip).pipe(destination);
};

await decompress();
