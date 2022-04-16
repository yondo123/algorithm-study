/**
 * @desc problem : 연속 부분수열 2
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution :
 */

/**
 * solution
 * @param {array} numArray : 수열 배열
 * @param {number} max : 합계 숫자
 */
function solution(numArray, max) {
    const answer = [];
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < numArray.length) {
        const rightProp = numArray[right];

        sum += numArray[right];

        if (sum <= max) {
            right++;
            answer.push(rightProp);
        }
        sum = 0;
        while (left > right) {
            sum += numArray[left++];
            console.log('SUM', sum);
            console.log('left', left);
            console.log('right', right);
        }
    }
    console.log(answer);
    // return answer.length;
}

const answer = solution([1, 3, 1, 2, 3], 5);
console.log(answer);
