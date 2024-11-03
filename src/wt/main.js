import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
  const pathToWorker = join(import.meta.dirname, 'worker.js');

  const getResultPromise = (n) =>
    new Promise((resolve) => {
      const worker = new Worker(pathToWorker, { workerData: { n } });

      worker.on('message', (value) =>
        resolve({ data: value, status: 'resolved' })
      );
      worker.on('error', () => resolve({ data: null, status: 'error' }));
    });

  const resultPromises = [];
  const cores = cpus().length;

  for (let i = 0; i < cores; i++) {
    resultPromises.push(getResultPromise(10 + i));
  }

  const results = await Promise.all(resultPromises);

  console.log(results);
};

await performCalculations();
