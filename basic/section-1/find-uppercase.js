/**
 * @desc problem : 대문자 찾기
 * @desc site : Olympiad
 * @desc level: 1
 * @desc problem : 아스키코드를 이용한 비교도 가능 (대문자 : 65 ~ 90, 소문자 : 97 ~ 122)
 */

/**
 * solution
 * @param {string} str : 문자열
 * @returns
 */
function solution(str) {
    let count = 0;
    for (const letter of str) {
        if (letter === letter.toUpperCase()) {
            count++;
        }
    }
    return count;
}

const answer = solution('KoreaTimeGood');
console.log(answer);
