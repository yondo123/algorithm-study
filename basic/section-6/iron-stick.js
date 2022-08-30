/**
 * @desc problem : 쇠 막대기
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : stack
 */

/**
 * 1. 열린지 확인한다.
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
    let isOpen = false;

    stick.split('').forEach(function (item, index) {
        if (item === open) {
            isOpen = true;
            stack.push(item);
        } else {
        }

        // if (item === open) {
        //     stack.push(item);
        // } else {
        //     const lastItem = stack.pop();
        //     if (lastItem === open) {
        //         console.log(lastItem, item + 'Whoops!! sticks : ' + stack.length);
        //         answer += stack.length;
        //     } else {
        //         answer += 1;
        //         stack.push(lastItem);
        //         stack.push(item);
        //     }
        // }
    });

    return answer;
}

const answer = solution('(((()(()()))(())()))(()())');
console.log(answer);
