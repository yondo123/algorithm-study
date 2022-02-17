/**
 * @desc problem : 격자판 최대
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : 이중 순회, Math.max 함수를 통한 최대 값 추출
 */

/**
 * Solution
 * @param {array} grid: 5x5 Grid Array
 */
function solution(grid) {
    const gridSize = grid.length;
    let answer = 0;
    let accRightDiag = 0;
    let accLeftDiag = 0;

    for (let i = 0; i < grid.length; i++) {
        let accCol = 0;
        let accRow = 0;
        for (let j = 0; j < grid.length; j++) {
            //좌측 대각선 합
            if (i === j) {
                accLeftDiag += grid[i][j];
            }

            //우측 대각선 합
            if (gridSize - 1 - i === j) {
                accRightDiag += grid[i][j];
            }
            //행, 열
            accCol += grid[i][j];
            accRow += grid[j][i];
        }

        const max = Math.max(accCol, accRow, accLeftDiag, accRightDiag);
        if (max > answer) {
            answer = max;
        }
    }
    return answer;
}

const answer = solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
]);
console.log(answer); //155 (10+39+50+37+19)
