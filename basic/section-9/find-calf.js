/**
 * @desc problem : 송아지 찾기 (BFS)
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : BFS
 */

/**
 * solution
 * @param position {number} 현재 위치
 * @param calfPosition {number} 송아지 위치
 */
const solution = (position, calfPosition) => {
  let answer = 0;
  const checkArray = Array.from({ length: 10 }, () => 0);
  const disposition = Array.from({ length: 10 }, () => 0);
  const queue = [];
  checkArray[position] = 1;
  queue.push(position);
  disposition[position] = 0;

  while (queue.length) {
    const node = queue.shift();
    //다음 이동거리는 -1, +1, +5 경우의 수가 존재
    for (let nextNode of [node - 1, node + 1, node + 5]) {
      //송아지 위치를 발견했을 때 (탐색 종료)
      if (nextNode === calfPosition) {
        return disposition[node] + 1;
      }
      //새로운 노드 탐색
      if (nextNode > 0 && nextNode < 10000 && checkArray[nextNode] === 0) {
        checkArray[nextNode] = 1; //방문 지점 표시
        queue.push(nextNode);
        disposition[nextNode] = disposition[node] + 1;
      }
    }
  }

  return answer;
};

console.log(solution(5, 14));
