/**
 * @desc problem : 이분탐색
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/koko-eating-bananas/description/?envType=list&envId=97h7kfgr
 * @desc level: 2
 */

/**
 *
 * @param bananas {array<number>} 바나나 더미
 * @param h {number} 사육사 도착 시간
 */
const solution = (bananas, h) => {
  const sortedBananas = bananas.sort((a, b) => a - b);
  let start = 1;
  let end = 1e9;
  let answer = 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let speed = 0;
    for (let i = 0; i < sortedBananas.length; i++) {
      speed += Math.ceil(sortedBananas[i] / mid);
    }
    if (speed <= h) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
};

console.log(solution([3, 6, 7, 11], 8)); //4
// console.log(solution([30, 11, 23, 4, 20], 5)); //30
