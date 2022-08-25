/**
 * @desc problem : 쇠 막대기
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : stack
 */

/**
 * solution
 * @param {string} stick : 막대기 문자열
 */
function solution(stick) {
    const open = '(';
    const close = ')';
    let stack = [];
    let answer = 0;

    stick.split('').forEach(function (item, index) {
        console.log(stack);
        if (item === open) {
            stack.push(item);
        } else {
            const lastItem = stack.pop();
            if (lastItem === close) {
                stack.push(lastItem);
            }
        }
    });

    return answer;
}

const answer = solution('()(((()())(())()))(())');
console.log(answer);
