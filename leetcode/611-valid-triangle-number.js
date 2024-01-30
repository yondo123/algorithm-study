/**
 * @desc problem : 이분 탐색
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/valid-triangle-number/description/
 * @desc level: 2
 */

const getAvailableIndex = (start, end, list, sum) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (sum > list[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

const solution = (list) => {
  //한 변의 길이 > 나머지 두 변의 합
  const sorted = list.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const firstEdge = sorted[i];
      const secondEdge = sorted[j];
      // console.log(firstEdge, secondEdge);
      const availableIndex = getAvailableIndex(j + 1, sorted.length - 1, sorted, firstEdge + secondEdge);
      answer += availableIndex - j;
    }
  }
  return answer;
};

console.log(solution([2, 2, 3, 4]));
