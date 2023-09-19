/**
 * @desc problem : 콜라 문제
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/132267
 * @desc level: 1
 */

/**
 * solution
 * @param changeCount {number} 교환에 필요한 갯수
 * @param givenCount {number} 마트가 주는 콜래 병 수
 * @param hasCount {number} 가지고 있는 병 수
 */
const solution = (changeCount, givenCount, hasCount) => {
  let answer = 0;

  while (hasCount >= changeCount) {
    const getColaCount = Math.floor(hasCount / changeCount) * givenCount;
    answer += getColaCount;
    hasCount = getColaCount + (hasCount % changeCount);
  }

  return answer;
};

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
