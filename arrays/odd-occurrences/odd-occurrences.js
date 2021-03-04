// @ts-check

// * 100% score
function solution(A) {
    const obj = A.reduce((acc, curr) => {
        if (acc[curr] !== undefined) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});

    for (let key in obj) {
        if (obj[key] % 2 === 1) {
            return parseInt(key);
        }
    }
}

// * test case scenarios
console.log(solution([5,5,5]) === 5);
console.log(solution([1, 1, 1000000000, 1000000000, 2]) === 2);