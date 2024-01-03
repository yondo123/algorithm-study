/**
 * @desc problem : Lemonade Change
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/lemonade-change/
 * @desc level: 1
 */

/**
 * solution
 * @param bills {Array<number>} 주문 배열
 */
const solution = (bills) => {
  let answer = true;
  const price = 5;
  const amount = {
    5: 0,
    10: 0,
    20: 0
  };

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    amount[bill] = amount[bill] + 1;
    const exchange = bill - price;
    // console.log('받은 돈', bill, '잔액', amount, '거스름돈', exchange);
    if (exchange === 5) {
      if (amount['5'] > 0) {
        amount['5'] = amount['5'] - 1;
      } else {
        answer = false;
        break;
      }
    } else if (exchange === 15) {
      if (amount['5'] && amount['10']) {
        amount['5'] = amount['5'] - 1;
        amount['10'] = amount['10'] - 1;
      } else if (amount['5'] >= 3) {
        amount['5'] = amount['5'] - 3;
      } else {
        answer = false;
        break;
      }
    }
  }

  return answer;
};

console.log(solution([5, 5, 5, 10, 20]));
console.log(solution([5, 5, 10, 10, 20]));
console.log(solution([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]));
console.log(solution([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]));
