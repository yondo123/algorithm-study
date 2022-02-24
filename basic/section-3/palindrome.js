/**
 * @desc problem : 회문 문자열
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 깊은 복사와 reverse
 */

/**
 * solution
 * @param {string} str : 문자열
 */
function solution(str) {
    const strArray = str.toLowerCase().split('');
    const reverseStrArray = strArray.slice().reverse();
    let answer = 'YES';

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] !== reverseStrArray[i]) {
            answer = 'NO';
            break;
        }
    }

    return answer;
}

const answer = solution('gooG'); //YES
console.log(answer);
