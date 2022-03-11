/**
 * @desc problem : 자릿수의 합
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 재귀 반복을 통한 자릿수 구하기
 */

/**
 * solution
 * @param {array} numArray : 대상 숫자
 */
function solution(numArray) {
    let max = 0;
    let answer = 0;

    //자릿수 합 계산
    function getSumDigits(number) {
        let value = 0;
        while (number) {
            value += number % 10;
            number = Math.floor(number / 10);
        }
        return value;
    }

    numArray.forEach(function (item, index) {
        const digits = getSumDigits(item);
        if (digits >= max) {
            max = digits;
            if (item > answer) {
                answer = item;
            }
        }
    });
    return answer;
}

const answer = solution([128, 460, 603, 40, 521, 137, 123]);
console.log(answer); //137
