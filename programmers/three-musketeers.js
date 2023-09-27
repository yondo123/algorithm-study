/**
 * @desc problem : 삼총사
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/131705
 * @desc level: 1
 */

const solution = (students) => {
  let answer = 0;
  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      for (let k = j + 1; k < students.length; k++) {
        if (students[i] + students[j] + students[k] === 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
};

solution([-2, 3, 0, 2, -5]);
