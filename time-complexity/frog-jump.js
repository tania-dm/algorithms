// * 100% score
function solution(X, Y, D) {
    return Math.ceil((Y-X) / D);
}

// * test case scenarios
console.log(solution(20, 850000, 3) === 283327);
console.log(solution(1, 5, 2) === 2);
console.log(solution(10, 85, 30) === 3);
console.log(solution(1, 1, 2) === 0)
console.log(solution(2, 1000000000, 999999998) === 1);
