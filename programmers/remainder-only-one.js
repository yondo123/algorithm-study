/**
 * @desc problem : 나머지가 1인 수 (프로그래머스 스킬체크 레벨1)
 * @desc site : Programmers
 * @desc level: 1
 * @desc solution : 구현
 */

/**
 * solution
 * @param {number} n : 자연수
 */
function solution(n) {
    let count = 1;
    while (count <= n) {
        if (n % count === 1) {
            return count;
        }
        count++;
    }
    return count;
}

console.log(solution(12));
