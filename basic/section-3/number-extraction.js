/**
 * @desc problem : 숫자만 추출
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 정규식을 이용한 숫자 추출
 */

/**
 * solution
 * @param {string} str : 문자열
 */
function solution(str) {
    return Number(str.replace(/[^0-9]/g, '')); //0~9 제외한 문자 제거
}

const answer = solution('g0en2T0s8eSoft');
console.log(answer); //208
