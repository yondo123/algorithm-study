/**
 * @desc problem : Permutations
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/permutations/
 * @desc level: 2
 */

/**
 * solution
 * @param nums {Array<number>} 숫자배열
 */
const solution = (nums) => {
  const answer = [];

  const DFS = (nodeTree, visited) => {
    if (!nodeTree.length) {
      answer.push(visited);
      return;
    }

    for (let i = 0; i < nodeTree.length; i++) {
      const node = nodeTree[i];
      const restNodeTree = [...nodeTree.slice(0, i), ...nodeTree.slice(i + 1)];
      const nextNodeTree = [...visited.slice(), node];
      DFS(restNodeTree, nextNodeTree);
    }
  };

  DFS(nums, []);

  return answer;
};

console.log(solution([1, 2, 3]));
