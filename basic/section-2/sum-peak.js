/**
 * @desc problem : 봉우리
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : 2차원 배열 - 4방향 탐색
 */

/**
 * Solution
 * @param {array} map: 5x5 Map Array
 */
function solution(map) {
    let answer = 0;

    for (let i = 1; i < map.length - 1; i++) {
        for (let j = 1; j < map.length - 1; j++) {
            const point = map[i][j];
            const top = map[i - 1][j] || 0;
            const bottom = map[i + 1][j] || 0;
            const left = map[i][j - 1] || 0;
            const right = map[i][j + 1] || 0;

            //봉우리는 해당 지점의 숫자가 상,하,좌,우 숫자보다 모두 클 때 봉우리로 인정한다.
            if (point > top && point > bottom && point > left && point > right) {
                console.log('Peak! ', point);
                answer++;
            }
        }
    }

    return answer;
}

const answer = solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 5, 3, 7, 2, 3, 0],
    [0, 3, 7, 1, 6, 1, 0],
    [0, 7, 2, 5, 3, 4, 0],
    [0, 4, 3, 6, 4, 1, 0],
    [0, 8, 7, 3, 5, 2, 0],
    [0, 0, 0, 0, 0, 0, 0]
]);
console.log(answer); //10
