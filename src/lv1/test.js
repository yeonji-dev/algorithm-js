export const question = `가운데 문자열 뽑기`;
export const input = "abcde";
export const run = (s) => {
    const length = s.length;
    const n = parseInt(length / 2);
    return length % 2 === 0
        ? s[n-1] + s[n]
        : s[n];
}
