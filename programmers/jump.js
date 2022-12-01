/**
 * @desc problem : 멀리뛰기
 * @desc site : Programmers
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/12914
 * @desc level: 2
 * @desc solution : 동적 계획법
 */

/**
 * solution
 * @param {number} n : 칸 갯수
 */
function solution(n) {
    const dy = Array.from(Array(n + 1).keys());
    dy[0] = 0;
    dy[1] = 1n;
    dy[2] = 2n;

    if (n > 2) {
        for (let index = 3; index < dy.length; index++) {
            dy[index] = dy[index - 2] + dy[index - 1];
        }
    }

    return dy[n] % 1234567n;
}

console.log(solution(4));
