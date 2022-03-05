/**
 * @desc problem : 가장 짧은 문자거리
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 정순회 후 역순회
 */

/**
 * solution
 * @param {string} str : 대상 문자열
 * @param {string} target : 탐색 문자
 */
function solution(str, target) {
    const answer = [];
    const strArray = str.trim().split('');
    let pos = 100;

    //정순회
    for (let i = 0; i < strArray.length; i++) {
        const char = strArray[i];
        if (char === target) {
            pos = 0;
        } else {
            pos++;
        }
        answer.push(pos);
    }
    pos = 100;
    //역순회
    for (let j = strArray.length - 1; j >= 0; j--) {
        const char = strArray[j];
        if (char === target) {
            pos = 0;
            answer.push(pos);
        } else {
            pos++;
            answer[j] = Math.min(answer[j], pos);
        }
    }

    return answer;
}

const answer = solution('supermario', 'r');
console.log(answer); //4 3 2 1 0 1 1 0 1 2
