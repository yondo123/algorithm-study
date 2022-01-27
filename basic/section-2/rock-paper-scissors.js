/**
 * @desc problem : 가위바위보
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : 수식의 규칙을 이용한 풀이
 */

/**
 * Solution
 * @desc : 가위 : 1, 바위 : 2, 보 : 3
 * @param {array} playerA: A의 가위바위보 기록
 * @param {array} playerB : B의 가위바위보 기록
 */
function solution(playerA, playerB) {
    const result = [];
    for (let index = 0; index < playerA.length; index++) {
        const choiceOfA = playerA[index];
        const choiceOfB = playerB[index];
        if (choiceOfA - choiceOfB === -2) {
            result.push('A');
        } else if (choiceOfA - choiceOfB === 2) {
            result.push('B');
        } else if (choiceOfA === choiceOfB) {
            result.push('D');
        } else {
            choiceOfA > choiceOfB ? result.push('A') : result.push('B');
        }
    }

    return result;
}
const answer = solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
console.log(answer); //A, B, A, B, D
