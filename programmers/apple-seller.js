/**
 * @desc problem : 과일 장수
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * @desc level: 1
 */

/**
 * solution
 * @param maxScore {number} 최대 점수
 * @param numberOfApples {number} 한 상자에 들어가는 사과의 수
 * @param apples {array<number>} 사과들의 점수
 */
const solution = (maxScore, numberOfApples, apples) => {
  const packages = [];
  const descOrderedApples = apples.sort((a, b) => b - a);
  let lowQuality = descOrderedApples[0];

  descOrderedApples.forEach((score, index) => {
    if (score <= lowQuality) {
      lowQuality = score;
    }
    if ((index + 1) % numberOfApples === 0) {
      packages.push(lowQuality * numberOfApples);
      lowQuality = descOrderedApples[index + 1];
    }
  });

  return packages.reduce((acc, score) => acc + score, 0);
};

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
