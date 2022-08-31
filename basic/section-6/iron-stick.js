/**
 * @desc problem : 쇠 막대기 자르기
 * @desc site : Olympiad
 * @desc level: 4
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
    let laserCheck = false;
    let laserCount = 0;

    stick.split('').forEach(function (item, index) {
        if (item === open || laserCheck) {
            //막대기를 자른 후 여는 괄호라면, 막대기 stack을 증가
            if (item === open) {
                stack.push(item);
                laserCheck = false;
            } else {
                //닫는 괄호라면 막대기 1개를 닫힘 처리 (1증가)
                answer++;
                stack.pop();
            }
        } else {
            const lastItem = stack.pop();
            // 이전 괄호가 열려있을 때 바로 막대기를 자른다.
            if (lastItem === open) {
                laserCount++;
                laserCheck = true;
                //막대기를 자를 때 기준은 쌓인 stack 기준 (왼쪽)
                answer += stack.length;
            } else {
                //잔여 막대기 증가
                answer++;
                stack.pop();
            }
        }
    });

    return answer;
}
const answer = solution('()(((()())(())()))(())');
// const answer = solution('(((()(()()))(())()))(()())');
console.log(answer); //17
