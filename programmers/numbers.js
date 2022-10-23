/**
 * @desc problem : 숫자의 표현
 * @desc site : programmers
 * @desc level: 2
 * @desc solution : 투포인터 알고리즘
 */

/**
 * solution
 * @param {number} num : 대상 숫자
 */
function solution(num) {
    const numbers = [];
    let answer = 0;
    let sum = 0;
    let left = 0;
    let right = 0;

    //기초배열 생성
    for (let index = 0; index < num; index++) {
        numbers.push(index + 1);
    }

    while (right <= num - 1) {
        sum += numbers[right];
        if (sum === num) {
            answer++;
            right++;
        } else if (sum > num) {
            sum = sum - numbers[left] - numbers[right];
            left++;
        } else {
            right++;
        }
    }

    return answer;
}

const answer = solution(15);
