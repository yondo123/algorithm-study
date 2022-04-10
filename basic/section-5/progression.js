/**
 * @desc problem : 연속 부분수열
 * @desc site : Olympiad
 * @desc level: 4
 * @desc solution : 투포인터 알고리즘
 */

/**
 * solution
 * @param {array} numArray : 수열 배열
 * @param {number} max : 합계 숫자
 */
function solution(numArray, max) {
    let answer = 0;
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < numArray.length) {
        console.log(`left : ${left}, right : ${right}, sum : ${sum}`);
        sum += numArray[right++];
        if (sum >= max) {
            if (sum === max) {
                answer++;
            }
            //연속으로 차감할 경우 대비
            while (sum >= max) {
                sum -= numArray[left++];
                if (sum === max) {
                    answer++;
                }
            }
        }
        console.log('========');
    }
    return answer;
}

const answer = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log(answer); //3
