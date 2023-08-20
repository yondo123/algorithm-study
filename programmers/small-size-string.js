/**
 * @desc problem : 크기가 작은 문자열
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/147355
 * @desc level: 1
 */

/**
 * Solution
 * @param {string} str 문자열
 * @param {string} target 부분 문자열
 */
const solution = (str, target) => {
  let length = target.length;
  let answer = 0;
  const numericTargetStr = Number(target);

  for (let i = 0; i < str.length; i++) {
    const partialStr = str.substring(i, length + i);
    if (
      partialStr.length === length &&
      Number(partialStr) <= numericTargetStr
    ) {
      answer += 1;
    }
  }

  return answer;
};

console.log(solution("3141592", "271")); //2
