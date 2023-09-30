/**
 * @desc problem : 이진수 출력
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : DFS
 */

function solution(n) {
  let answer = "";
  const dfs = (n) => {
    if (n === 0) {
      return;
    }
    dfs(parseInt(n / 2));
    answer += String(n % 2);
  };
  dfs(n);
  return Number(answer);
}

solution(11); //1011
