/**
 * @desc problem : 택배 상자
 * @desc site : Programmers
 * @desc level: 2
 * @desc solution : Queue
 */

/**
 * solution
 * @param {array} orderList : 상자 순서 배열
 */
function solution(orderList) {
    let lastOrder = 0;
    let count = 0;
    while (orderList.length) {
        const order = orderList.shift();
        if (!count || lastOrder - 1 === order) {
            lastOrder = order;
            count++;
            continue;
        }

        break;
    }

    return count;
}

const answer = solution([4, 3, 1, 2, 5]);
console.log(answer);
