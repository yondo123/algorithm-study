/**
 * @desc problem : 공통원소 구하기
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 투 포인터
 */

/**
 * solution
 * @param {array} arrayA : 숫자배열 A
 * @param {array} arrayB : 숫자배열 B
 */
function solution(arrayA, arrayB) {
    const answer = [];
    let posA = 0;
    let posB = 0;

    arrayA.sort(function (a, b) {
        return a - b;
    });

    arrayB.sort(function (a, b) {
        return a - b;
    });

    while (posA < arrayA.length && posB < arrayB.length) {
        //둘 중 한쪽 배열을 모두 탐색했다면 비교대상 없으므로 종료
        if (arrayA[posA] === arrayB[posB]) {
            answer.push(arrayA[posA]);
            posA++;
            posB++;
        } else if (arrayA[posA] < arrayB[posB]) {
            //작은 값이 속한 배열의 인덱스를 증가
            posA++;
        } else {
            posB++;
        }
    }
    return answer;
}

const answer = solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log(answer); //2,3,5
