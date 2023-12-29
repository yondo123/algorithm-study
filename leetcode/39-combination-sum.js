/**
 * @desc problem : Combination Sum
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/combination-sum/
 * @desc level: 2
 */

/**
 * solution
 * @param candidates {Array<number>} 숫자배열
 * @param target {number} 목표숫자
 */
const solution = (candidates, target) => {
  const answer = [];

  const DFS = (node, sum, array) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      answer.push([...array]);
      return;
    }

    for (let i = node; i < candidates.length; i++) {
      array.push(candidates[i]);
      DFS(i, sum + candidates[i], array);
      array.pop();
    }
  };

  DFS(0, 0, []);

  return answer;
};

solution([2, 3, 6, 7], 7);
