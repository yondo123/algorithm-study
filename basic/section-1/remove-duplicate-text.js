/**
 * @desc problem : 중복문자제거
 * @desc site : Olympiad
 * @desc level: 1
 * @desc problem : indexOf를 활용한 풀이
 */

/**
 * solution
 * @param {string} str : 문자열
 * @returns
 */
function solution(str) {
    let output = '';
    for (const char of str) {
        if (output.indexOf(char) < 0) {
            output += char;
        }
    }

    return output;
}

const answer = solution('ksekkset');
console.log(answer); //kset
