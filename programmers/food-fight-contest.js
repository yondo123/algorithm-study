/**
 * @desc problem : 푸드 파이터 대회
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * @desc level: 1
 */

/**
 * solution
 * @param food {array<number>} 음식 배열
 */
const solution = (food) => {
  let table = "";

  food.forEach((item, index) => {
    if (item > 1) {
      console.log(item, "이다!!");
      const foodLength = item % 2 === 0 ? item : item - 1;
      const foodString = String(index).repeat(foodLength / 2);
      table += foodString;
    }
  });

  return `${table}0${table.split("").reverse().join("")}`;
};

console.log(solution([1, 3, 4, 6])); //1223330333221
console.log(solution([1, 7, 1, 2])); //111303111
