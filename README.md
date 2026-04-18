# Matrix Multiplication using Multithreading

This project demonstrates parallel matrix multiplication using worker threads in Node.js. It allows users to experiment with different matrix sizes and workloads and observe how execution time varies with the number of threads.


Live Demo

https://matrix-multithread.onrender.com/

## Overview

The application is a full stack system consisting of a backend built with Node.js and a simple frontend interface. Users can input matrix size and number of multiplication tasks, trigger execution, and visualize results through a table and graph.

The main goal of this project is to analyze performance improvements achieved through multithreading and understand system limitations such as thread overhead and resource constraints.

## Features

User controlled input for matrix size and number of multiplications
Parallel execution using worker threads
Execution time measurement across different thread counts
Dynamic table and graphical visualization of results
Deployable on cloud platforms such as Render

## Tech Stack

Backend: Node.js with Worker Threads and Express
Frontend: HTML, JavaScript, Chart.js
Deployment: Render

## Project Structure

matrix_multithread
backend
index.js
worker.js
matrix.js
frontend
index.html
package.json

## How It Works

The user provides input values for matrix size and total number of multiplication tasks. The backend distributes the workload across multiple worker threads. Each worker generates random matrices and performs multiplication.

The system runs the same workload across different thread counts and measures execution time. The results are sent back to the frontend where they are displayed in tabular and graphical form.

## Running Locally

Clone the repository

git clone https://github.com/VishwassKhattarr/matrix_multithread.git

Navigate to the project directory

cd matrix_multithread

Install dependencies

npm install

Start the server

npm start

Open browser and go to

http://localhost:3000

## Deployment

This project can be deployed on Render.

Push the repository to GitHub
Create a new web service on Render
Set build command to npm install
Set start command to npm start

The application will be available on the generated URL.

## Notes

Large matrix sizes can significantly increase computation time due to cubic time complexity of matrix multiplication. For practical execution in limited environments, smaller sizes are recommended.

Performance improves with increasing threads up to the number of available CPU cores. Beyond that, overhead from context switching may reduce efficiency.

## Learning Outcomes

Understanding of multithreading in Node.js
Performance analysis using parallel computation
Hands on experience with backend deployment
Basic frontend integration with backend APIs

## Author

Vishwas Khattar
