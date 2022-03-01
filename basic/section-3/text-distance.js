/**
 * @desc problem : 가장 짧은 문자거리
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 이중순회, MAth.abs
 */

/**
 * solution
 * @param {string} str : 대상 문자열
 * @param {string} target : 탐색 문자
 */
function solution(str, target) {
    const strArray = str.trim().split('');
    let answer = '';

    strArray.forEach(function (item, index, array) {
        let distance = -1;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === target) {
                //탐색 거리
                const pos = Math.abs(index - j);

                //한번도 방문하지 않았거나 탐색 거리가 더 짧을 때 변수에 저장
                if (distance < 0 || distance > pos) {
                    distance = pos;
                }
            }
        }

        answer += distance.toString() + ' ';
    });

    return answer;
}

const answer = solution('supermario', 'r');
console.log(answer); //208
