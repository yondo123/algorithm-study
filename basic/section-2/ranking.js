/**
 * @desc problem : 등수 구하기
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : 이중 순회
 */

/**
 * Solution
 * @param {array} score: 점수 배열
 */
function solution(score) {
    const rankArray = [];

    score.forEach(function (item, index, array) {
        let rank = array.length;
        //자신의 등수 비교 (자신 제외한 점수에서 높을 때마다 1씩 줄임)
        for (let i = 0; i < array.length; i++) {
            if (index !== i && item >= array[i]) {
                rank--;
            }
        }
        rankArray.push(rank);
    });

    return rankArray;
}
const answer = solution([87, 89, 92, 100, 76]);
console.log(answer); //4 3 2 1 5
