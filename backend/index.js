import express from 'express';
import { Worker } from 'worker_threads';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.static('frontend')); // serve frontend

// Root route (important)
app.get('/', (req, res) => {
    res.sendFile(path.resolve('frontend/index.html'));
});

// Worker runner
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
                    const time = (Date.now() - start) / 1000; // seconds
                    resolve(time.toFixed(2));
                }
            });
        }
    });
}

// NEW: POST route for user input
app.post('/run', async (req, res) => {
    const { size, totalTasks } = req.body;

    const results = [];

    for (let t = 1; t <= 8; t++) {
        const time = await runThreads(t, size, totalTasks);
        results.push({ threads: t, time });
    }

    res.json(results);
});

app.listen(3000, () => console.log("Server running on port 3000"));