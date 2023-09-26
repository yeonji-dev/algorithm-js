if (process.argv.length < 4){
    console.error('실행할 문제를 인수로 입력해주세요.');
    console.error('실행 커맨드 형식: node index.js 레벨 문제명');
    console.error('레벨 및 문제명은 README.md 파일을 참조하세요.')
    process.exit(1);
}

const packageName = process.argv[2];
const js = process.argv[3];

const {question, input, run} = await import(`./src/${packageName}/${js}.js`);

const answer = run(input);

console.log("===============QUESTION===============")
console.log(question);
console.log("================ANSWER================");
console.log(answer);
console.log("======================================");