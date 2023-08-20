/**
 * @desc problem : 기사 단원의 무기
 * @desc site : 프로그래머스
 * @desc link :https://school.programmers.co.kr/learn/courses/30/lessons/136798
 * @desc level: 1
 */

/**
 * solution
 * @param number {number} 기사단원의 수
 * @param limit {number} 최대 공격력
 * @param power {number} 초과 공격력일 때 공격력
 */
const solution = (number, limit, power) => {
  const knightList = [];

  for (let i = 1; i <= number; i++) {
    let measureCount = 0;

    for (let measureIndex = 1; measureIndex <= i / 2; measureIndex++) {
      if (i % measureIndex === 0) {
        measureCount += 1;
      }
    }
    knightList.push(measureCount + 1);
  }

  return knightList.reduce(
    (acc, knightPower) =>
      knightPower > limit ? acc + power : acc + knightPower,
    0
  );
};

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
