import express from 'express';
import { Worker } from 'worker_threads';
import os from 'os';

const app = express();

function runThreads(threadCount, size, totalTasks) {
    return new Promise((resolve) => {
        let completed = 0;
        const start = Date.now();

        const tasksPerThread = Math.floor(totalTasks / threadCount);

        for (let i = 0; i < threadCount; i++) {
            const worker = new Worker('./backend/worker.js');

            worker.postMessage({ size, count: tasksPerThread });

            worker.on('message', () => {
                completed++;
                if (completed === threadCount) {
                    const time = (Date.now() - start) / 60000;
                    resolve(time.toFixed(2));
                }
            });
        }
    });
}
app.get('/', (req, res) => {
    res.send("Server is alive ");
});
app.get('/run', async (req, res) => {
    const results = [];
    const size = 300; // scaled size
    const totalTasks = 50;

    for (let t = 1; t <= 8; t++) {
        const time = await runThreads(t, size, totalTasks);
        results.push({ threads: t, time });
    }

    res.json(results);
});

app.listen(3000, () => console.log("Server running on port 3000"));