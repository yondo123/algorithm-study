/**
 * @desc problem : 택배 상자
 * @desc site : Programmers
 * @desc level: 2
 * @desc solution : Stack
 */

/**
 * solution
 * @param {array} orderList : 상자 순서 배열
 */
function solution(orderList) {
    console.log('orderList', orderList);
    const orderLength = orderList.length;
    const temp = [];
    let count = 1;
    let answer = 0;
    let order = orderList[answer];

    while (order) {
        console.log('loop', count, 'order', order, 'orderList', orderList, 'temp', temp);
        console.log('answer! ', answer);

        if (order === count) {
            answer++;
            order = orderList[answer];
            count++;
            continue;
        }

        if (order === temp[temp.length - 1]) {
            answer++;
            temp.pop();
            order = orderList[answer];
            continue;
        } else if (order < temp[temp.length - 1]) {
            break;
        }

        if (count <= orderLength) {
            temp.push(count);
        }

        count++;

        console.log('* answer > ', answer);
        console.log('======================');
    }

    console.log('last! answer > ', answer);
    console.log('======================');
    return answer;
}

const answer = solution([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]);
