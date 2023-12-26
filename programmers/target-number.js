/**
 * @desc problem : 타겟 넘버
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * @desc level: 2
 */

const solution = (numbers, target) => {
  let count = 0;

  const DFS = (numbers, target, depth, value) => {
    const nextDepth = depth + 1;
    if (numbers.length === depth && target === value) {
      count += 1;
      return;
    } else if (numbers.length === depth) {
      return;
    }

    DFS(numbers, target, nextDepth, value + numbers[depth]);
    DFS(numbers, target, nextDepth, value - numbers[depth]);
  };

  DFS(numbers, target, 0, 0);

  return count;
};

console.log(solution([1, 1, 1, 1, 1], 3));
