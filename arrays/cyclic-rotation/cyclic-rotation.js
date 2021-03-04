// @ts-check

// * 100% score
function solution(array, k) {
    // if k > array.length there is no need shuffling the items that many times, so we remove from k as many array lengths as we can
    k = k % array.length;
    const removed = array.splice(array.length - k, k);

    return removed.concat(array);
}

// * test case scenarios
console.log(solution([1, 1, 2, 3, 5], 42)); // should be [3, 5, 1, 1, 2]
console.log(solution([1], 3)); // should be [1]