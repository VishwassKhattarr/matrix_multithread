export function generateMatrix(n) {
    return Array.from({ length: n }, () =>
        Array.from({ length: n }, () => Math.random())
    );
}

export function multiply(A, B) {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}