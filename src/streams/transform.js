import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';

const transform = async () => {
  const { stdin, stdout } = process;

  const transform = new Transform({
    transform(chunk, _, callback) {
      callback(
        null,
        chunk
          .toString()
          .replace(EOL, '')
          .split('')
          .reverse()
          .join('')
          .concat(EOL)
      );
    },
  });

  await pipeline(stdin, transform, stdout);
};

await transform();
