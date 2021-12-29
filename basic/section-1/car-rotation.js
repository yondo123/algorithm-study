/**
 * @desc problem : 차량 10부제
 * @desc site : Olympiad
 * @desc level: 1
 */

/**
 * solution
 * @param {number} date : 날짜
 * @param {array} vehicle : 차량
 */
function solution(date, vehicle) {
    let count = 0;
    vehicle.forEach((item) => {
        if (item % 10 === date) {
            count++;
        }
    });
    return count;
}

const answer = solution(0, [12, 20, 54, 30, 87, 91, 30]);
console.log(answer);
