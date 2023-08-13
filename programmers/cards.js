/**
 * @desc problem : 카드 뭉치
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/159994
 * @desc level: 1
 */

/**
 * @param {array} cardsA 카드더미A
 * @param {array} cardsB 카드더미B
 * @param {array} goal 찾을 문자열 배열
 */

console.time('소요시간');
const solution = (cardsA, cardsB, goal) => {
  let lastIndexOfCardsA = -1;
  let lastIndexOfCardsB = -1;
  const copyGoalArray = goal.slice(0);

  goal.forEach((targetStr, index) => {
    const searchIndexOfCardsA = cardsA.indexOf(targetStr);
    const searchIndexOfCardsB = cardsB.indexOf(targetStr);

    if (searchIndexOfCardsA > -1 && searchIndexOfCardsA === lastIndexOfCardsA + 1) {
      lastIndexOfCardsA = searchIndexOfCardsA;
      copyGoalArray.shift();
    }

    if (searchIndexOfCardsB > -1 && searchIndexOfCardsB === lastIndexOfCardsB + 1) {
      lastIndexOfCardsB = searchIndexOfCardsB;
      copyGoalArray.shift();
    }
  });
  return copyGoalArray.length ? 'No' : 'Yes';
};
console.timeEnd('소요시간');

console.log(solution(['i', 'drink', 'water'], ['want', 'to', 'juice'], ['i', 'want', 'to', 'drink', 'juice'])); // "Yes"
console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // "YES"
console.log(solution(['i'], ['want'], ['i', 'want'])); // "Yes"

console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // "No"
console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'it', 'that', 'way'])); // "No"
console.log(solution(['a', 'b', 'c'], ['d', 'e', 'f'], ['a', 'd', 'f'])); // "No"
