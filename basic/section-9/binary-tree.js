/**
 * @desc problem : 이진 트리 순회 (BFS)
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : BFS
 */

const solution = () => {
  let answer = '';
  const queue = [];
  queue.push(1);
  while (queue.length) {
    const node = queue.shift();
    answer += node + ' ';

    for (let nv of [node * 2, node * 2 + 1]) {
      if (nv > 7) {
        continue;
      }
      queue.push(nv);
    }
  }

  return answer;
};

console.log(solution());
