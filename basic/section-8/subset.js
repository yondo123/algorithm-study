/**
 * @desc problem : 부분 집합 구하기
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : DFS
 */

const solution = (n) => {
  const answer = [];
  const checkArray = Array.from({ length: n + 1 }, () => 0);
  const dfs = (v) => {
    if (v === n + 1) {
      let subset = "";
      checkArray.forEach((num, index) => {
        if (num === 1) {
          subset += String(index);
        }
      });
      if (subset) {
        answer.push(Number(subset));
      }

      return;
    }
    checkArray[v] = 1;
    dfs(v + 1); //left
    checkArray[v] = 0;
    dfs(v + 1); //right
  };
  dfs(1);
  return answer;
};

solution(3); //[123, 12, 13, 1, 23, 2, 3]
