/**
 * @desc problem : 가장 가까운 글자
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/142086
 * @desc level: 1
 */

/**
 * Solution
 * @param str {string} 문자열
 */
const solution = (str) => {
  const answer = [];
  const arrayOfStr = str.split("");
  const distanceMap = new Map();

  for (let i = 0; i < arrayOfStr.length; i++) {
    const char = arrayOfStr[i];
    const distance = distanceMap.get(char);
    console.log("distacne", distance);
    answer.push(distance > -1 ? Math.abs(i - distance) : -1);
    distanceMap.set(char, i);
  }
  return answer;
};
console.log(solution("banana")); //[ -1, -1, -1, 2, 2, 2 ]
console.log(solution("foobar")); //[ -1, -1, 1, -1, -1, -1 ]
console.log(solution("aabba")); //-1,1,-1,1,3
console.log(solution("ss")); //-1,1
console.log(solution("sss")); //-1,1,1
console.log(solution("ssss")); //-1,1,1,1
