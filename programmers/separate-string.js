/**
 * @desc problem : 문자열 나누기
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/140108
 * @desc level: 1
 */

/**
 * solution
 * @param string {string} 분리 할 문자열
 */
const solution = (string) => {
  let separateCount = 0;
  let count = 0;
  let index = 0;

  while (index < string.length) {
    const char = string[index];

    if (string[0] === char) {
      separateCount += 1;
    } else {
      separateCount -= 1;
    }

    index += 1;

    if (!separateCount) {
      string = string.slice(index);
      count += 1;
      index = 0;
      separateCount = 0;
    } else if (string.length === index) {
      count += 1;
    }
  }
  return count;
};

console.log(solution("banana")); //3
console.log(solution("abracadabra")); //6
console.log(solution("aaabbaccccabba")); //3
console.log(solution("aaba")); //1
