import { join } from 'path';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const pathToScript = join(import.meta.dirname, 'files', 'script.js');

  fork(pathToScript, args, {stdio: 'inherit'});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['a', 'b', 'c']);
