/**
 * @desc problem : 큰 수 출력하기
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : filter를 활용한 풀이
 */

/**
 * solution
 * @param {array} numberArray : 숫자 배열
 * @returns
 */
function solution(numberArray) {
    return numberArray.filter(function (item, index, array) {
        // 첫 인자는 비교할 대상이 없으니 허용, 이후부터 자신의 앞 원소 비교
        return !index || item > array[index - 1];
    });
}

const answer = solution([7, 3, 9, 5, 6, 12]);
console.log(answer); //kset
