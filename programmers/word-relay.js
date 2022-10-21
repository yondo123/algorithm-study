/**
 * @desc problem : 끝말잇기
 * @desc site : programmers
 * @desc level: 2
 * @desc solution :
 */

/**
 * solution
 * @param {number} n : 참가수
 * @param {array} words : 끝말잇기 배열
 */
function solution(n, words) {
    words.forEach(function (item, index) {
        let startChar = item.substr(-1);
        console.log(item, startChar);
    });
}

const answer = solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']);
console.log(answer);
