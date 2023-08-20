/**
 * @desc problem : 둘만의 암호
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/155652
 * @desc level: 1
 */

console.time("소요 시간");

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/**
 * Solution
 * @param str {string} 대상 문자열
 * @param skip {string} 건너 뛸 문자열
 * @param index {number} 건너 뛰는 횟수
 * @returns {string} 변환 문자
 */
const solution = (str, skip, index) => {
  let result = "";
  const skipCharacters = skip.split("");
  const targetAlphabet = ALPHABET.filter(
    (char) => skipCharacters.indexOf(char) < 0
  );

  for (const i in str) {
    const char = str[i];
    const indexOfChar = targetAlphabet.indexOf(char) + index;
    let indexOfPassword =
      indexOfChar > targetAlphabet.length - 1
        ? indexOfChar - targetAlphabet.length
        : indexOfChar;
    if (indexOfPassword > targetAlphabet.length - 1) {
      indexOfPassword = Math.abs(targetAlphabet.length - indexOfPassword);
    }
    result += targetAlphabet[indexOfPassword]
      ? targetAlphabet[indexOfPassword]
      : targetAlphabet[targetAlphabet.length - 1];
  }
  return result;
};

console.timeEnd("소요 시간");
console.log(solution("aukks", "wbqd", 5)); //happy
console.log(solution("zzzzzz", "abcdefghijklmnopqrstuvwxy", 6));
console.log(solution("z", "abcdefghij", 20));
console.log(solution("klmnopqrstuvwxyz", "abcdefghij", 20)); //opqrstuvwxyzklmn
