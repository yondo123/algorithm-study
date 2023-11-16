/**
 * @desc problem : 숫자 짝꿍
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/131128
 * @desc level: 1
 */

/**
 * solution
 * @param {string} x
 * @param {string} y
 */
const solution = (x, y) => {
  let duplicateItems = [];
  const arrayX = x.split('');
  const arrayY = y.split('');
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);

  arrayX.forEach((item) => {
    countX[item]++;
  });

  arrayY.forEach((item) => {
    countY[item]++;
  });

  countX.forEach((xItem, index) => {
    const yItem = countY[index];
    if (xItem > 0 && yItem > 0) {
      const repeatCount = Math.min(xItem, yItem);
      duplicateItems.push(String(index).repeat(repeatCount));
    }
  });

  duplicateItems.sort((a, b) => b - a);

  if (!duplicateItems.length) {
    return '-1';
  }

  if (Number(duplicateItems.join('') === 0)) {
    return '0';
  }

  return duplicateItems.join('');
};
//
solution('100', '2345'); //-1
solution('100', '203045'); //0
solution('12321', '42531'); //321
solution('100', '123450'); //10
solution('5525', '1255'); //552
solution('100', '100'); //552
