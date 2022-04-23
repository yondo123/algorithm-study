/**
 * @desc problem : 최대 매출
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 투 포인터 알고리즘
 */

/**
 * Solution
 * @param {array} sales : 매출 기록
 * @param {number} days : 연속 집계일
 * @returns
 */
function solution(sales, days) {
    let max = 0;
    let sum = 0;
    let left = 0;
    let right = 0;

    while (right < sales.length) {
        sum += sales[right];
        if (right - left === days - 1) {
            let subtract = 0;
            for (let i = 0; i < left; i++) {
                subtract += sales[i];
            }

            max = sum - subtract > max ? sum - subtract : max;
            left++;
        }
        right++;
    }
    return max;
}
const answer = solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log(answer); //56
