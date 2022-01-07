/**
 * @desc problem : 가운데 문자 출력
 * @desc site : Olympiad
 * @desc level: 1
 * @desc problem :
 */

/**
 * solution
 * @param {string} str : 문자열
 * @returns
 */
function solution(str) {
    let output = '';
    const halfIndex = Math.round(str.length / 2) - 1;
    const outputLength = str.length % 2 ? 1 : 2;

    str.split('').forEach(function (item, index) {
        if (index >= halfIndex && outputLength != output.length) {
            output += item;
        }
    });

    return output;
}

const answer = solution('study');
console.log(answer);
