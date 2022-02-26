/**
 * @desc problem : 유효한 회문 문열
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 아스키코드를 이용한 문자열 변환
 */

/**
 * solution
 * @param {string} str : 문자열
 */
function solution(str) {
    str = str.trim().toLowerCase();
    let answer = 'YES';
    let validStr = [];

    // 비교 가능한 문자열로 변환(문자만 추출)
    for (let i = 0; i < str.length; i++) {
        const asc = str[i].charCodeAt();
        if (asc > 97 && asc < 122) {
            validStr.push(str[i]);
        }
    }

    // 끝에서 끝 문자열 반복하면서 동일한지 비교
    for (let j = 0; j < Math.floor(validStr.length / 2); j++) {
        if (validStr[j] !== validStr[validStr.length - 1 - j]) {
            answer = 'NO';
        }
    }

    return answer;
}

const answer = solution('found7, time: study; Yduts; emit, 6Dnuof'); //YES
console.log(answer);
