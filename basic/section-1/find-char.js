/**
 * @desc problem : 문자 찾기
 * @desc site : Olympiad
 * @desc level: 1
 */

/**
 * solution
 * @param {string} str : 문자열
 * @param {string} key : 탐색 문자
 */
function solution(str, key) {
    let count = 0;
    [...str].forEach(function (item) {
        if (item.toLocaleUpperCase() === key) {
            count++;
        }
    });
    return count;
}
const answer = solution('COMPUTERPROGRAMMING', 'R');
console.log(answer);
