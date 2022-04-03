/**
 * @desc problem : 배열 합치기
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 투포인터 알고리즘
 */

/**
 * solution
 * @param {array} arrayA : 배열 A (sorted)
 * @param {array} arrayB : 배열 B (sorted)
 */
function solution(arrayA, arrayB) {
    const loop = arrayA.length >= arrayB.length ? arrayA.length : arrayB.length;
    const answer = [];

    for (let i = 0; i < loop; i++) {
        const a = arrayA[i] || 0;
        const b = arrayB[i] || 0;

        if (a >= b) {
            if (b) {
                answer.push(b);
            }
            answer.push(a);
        } else {
            if (a) {
                answer.push(a);
            }
            answer.push(b);
        }
    }
    return answer;
}

const answer = solution([1, 2], [2, 3, 6, 7, 9]);
console.log(answer); //[1, 2, 3, 3, 5, 6, 7, 9]
