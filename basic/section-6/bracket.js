/**
 * @desc problem : 올바른 괄호
 * @desc site : Olympiad
 * @desc level: 2
 * @desc solution : stack
 */

/**
 * solution
 * @param {array} str : 입력 문자열
 */
function solution(str) {
    const brackets = str.split('');
    const open = '(';
    let openCount = 0;

    while (brackets.length) {
        const bracket = brackets.shift();
        if (bracket == open) {
            openCount++;
        } else {
            openCount--;
        }
    }
    return openCount < 1 ? 'YES' : 'NO';
}

const answer = solution('(()(()))(()');
console.log(answer);
