/**
 * @desc problem : 괄호 문자 제거
 * @desc site : Olympiad
 * @desc level: 2
 * @desc solution : stack
 */

/**
 * solution
 * @param {string} word : 괄호문자
 */
function solution(word) {
    const wordArray = word.split('');
    let answer = '';
    let openCount = 0;

    while (wordArray.length) {
        const word = wordArray.shift();
        if (word === '(') {
            openCount++;
        } else if (word === ')') {
            openCount--;
        } else if (!openCount) {
            answer += word;
        }
    }

    return answer;
}

const answer = solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
console.log(answer); //EFLM
