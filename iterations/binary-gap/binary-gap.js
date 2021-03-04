// @ts-check

// * 100% score
function solution(N) {
    let gapArr = Number(N).toString(2).split('1');

    if (gapArr[gapArr.length -1] !== '') {
        gapArr.pop();
    }

    return gapArr.reduce((acc, val) => acc < val.length ? val.length : acc, 0);
}

// * test case scenarios
console.log(solution(6) === 0);
console.log(solution(51712) === 2);
console.log(solution(20) === 1);