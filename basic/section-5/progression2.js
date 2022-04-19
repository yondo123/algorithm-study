/**
 * @desc problem : 연속 부분수열 2
 * @desc site : Olympiad
 * @desc level: 4
 * @desc solution : 투 포인터 알고리즘
 */

/**
 * solution
 * @param {array} numArray : 수열 배열
 * @param {number} max : 합계 숫자
 */
function solution(numArray, max) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let count = 0;

    while (right < numArray.length) {
        //연속수열갯수 : right - left +1
        sum += numArray[right];
        if (sum <= max) {
            count += right - left + 1;
        } else {
            //수열 합이 기준 값보다 큰 경우, left를 한 칸씩 증가한다.
            while (sum > max) {
                sum -= numArray[left++];
            }
            count += right - left + 1;
        }
        right++;
    }

    return count;
}

const answer = solution([1, 3, 1, 2, 3], 5);
console.log(answer);
