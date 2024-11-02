import { join } from 'path';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  const gzip = createGzip();

  const source = createReadStream(
    join(import.meta.dirname, 'files', 'fileToCompress.txt')
  );
  const destination = createWriteStream(
    join(import.meta.dirname, 'files', 'archive.gz')
  );

  source.pipe(gzip).pipe(destination);
};

await compress();
