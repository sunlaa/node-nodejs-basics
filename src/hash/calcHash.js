import { join } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const toRead = join(
    import.meta.dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
  const stream = createReadStream(toRead);
  const hashStream = createHash('sha256').setEncoding('hex');

  await pipeline(stream, hashStream, process.stdout);
};

await calculateHash();
