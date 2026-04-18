import { parentPort } from 'worker_threads';
import { generateMatrix, multiply } from './matrix.js';

parentPort.on('message', ({ size, count }) => {
    for (let i = 0; i < count; i++) {
        const A = generateMatrix(size);
        const B = generateMatrix(size);
        multiply(A, B);
    }
    parentPort.postMessage("done");
});