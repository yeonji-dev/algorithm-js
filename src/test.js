export const runTest1 = (s) => {
    const length = s.length;
    const n = parseInt(length / 2);
    return length % 2 === 0
        ? s[n-1] + s[n]
        : s[n];
}