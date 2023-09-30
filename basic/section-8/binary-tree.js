/**
 * @desc problem : 이진 트리 순회
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : DFS
 */

const solution = (n) => {
  let answer = {
    prefix: [],
    postfix: [],
  };
  const dfs = (n) => {
    if (n > 7) {
      return;
    }
    answer.prefix.push(n);
    dfs(n * 2);
    dfs(n * 2 + 1);
    answer.postfix.push(n);
  };
  dfs(n);
  return answer;
};

console.log(solution(1)); //전위 순회 : 1->2->4->5->3->6->7
