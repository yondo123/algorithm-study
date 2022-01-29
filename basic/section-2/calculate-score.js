/**
 * @desc problem : 점수계산
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : stack 누산이용
 */

/**
 * Solution
 * @param {array} score: 채점 배열 (1: O, 2: X)
 */
function solution(score) {
    let stack = 0;
    let totalScore = 0;
    score.forEach(function (item, index) {
        if (item) {
            //맞았을 때 누적된 보너스점수 + 1씩 총합에 더함
            totalScore += stack + 1;
            stack++;
        } else {
            //중간에 틀렸다면 누적 값 초기화
            stack = 0;
        }
    });
    return totalScore;
}
const answer = solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
console.log(answer); //10
