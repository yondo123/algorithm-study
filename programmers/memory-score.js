/**
 * @desc problem : 추억점수
 * @desc site : Programmers
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/176963
 * @desc level: 1
 */

const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];
const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni']
];

const solution = (name, yearning, photo) => {
  const yearningMap = new Map();
  name.forEach((name, index) => {
    yearningMap.set(name, yearning[index]);
  });

  const result = photo.map((names) => {
    return names.reduce((acc, name) => {
      const yearning = yearningMap.get(name) ?? 0;
      return acc + yearning;
    }, 0);
  });

  return result;
};

solution(name, yearning, photo);
