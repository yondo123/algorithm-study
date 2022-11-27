/**
 * @desc problem : 수박수박수박수박수 (프로그래머스 스킬체크 레벨1)
 * @desc site : Programmers
 * @desc level: 1
 * @desc solution : 구현
 */

/**
 * solution
 * @param {n} n : 반복 횟수
 */
function solution(n) {
    let answer = '';

    for (let index = 1; index <= n; index++) {
        answer += index % 2 ? '수' : '박';
    }

    return answer;
}

solution(4);
