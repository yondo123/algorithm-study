/**
 * @desc problem : 이모티콘 할인 행사
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/150368
 * @desc level: 2
 */

const getDiscountPrice = (discount, price) => {
  return price - price * (discount / 100);
};

/**
 *
 * @param users {array<[number, number]>}
 * @param emoticons {array<number>}
 */
const solution = (users, emoticons) => {
  const discountPercentages = [10, 20, 30, 40];
  const permutations = [];
  const tempPermutations = [];
  const result = {
    maxSales: 0,
    maxSubscribe: 0
  };

  const dfs = (depth, count) => {
    if (depth === count) {
      permutations.push([...tempPermutations]);
      return;
    }
    for (let i = 0; i < discountPercentages.length; i++) {
      tempPermutations[depth] = discountPercentages[i];
      dfs(depth + 1, emoticons.length);
    }
  };
  dfs(0, emoticons.length);

  permutations.forEach((emoticonDiscount, index) => {
    let totalSubscribe = 0;
    let totalSales = 0;

    users.forEach((user, userIndex) => {
      const userMaxDiscount = user[0];
      const userMaxAmount = user[1];
      let totalPurchase = 0;

      emoticons.forEach((price, index) => {
        if (emoticonDiscount[index] >= userMaxDiscount) {
          totalPurchase += getDiscountPrice(emoticonDiscount[index], price);
        }
      });

      if (totalPurchase >= userMaxAmount) {
        totalSubscribe += 1;
      } else {
        totalSales += totalPurchase;
      }
    });

    if (totalSubscribe > result.maxSubscribe) {
      result.maxSubscribe = totalSubscribe;
      result.maxSales = totalSales;
    }

    if (totalSubscribe === result.maxSubscribe) {
      result.maxSales = Math.max(result.maxSales, totalSales);
    }
  });

  return [result.maxSubscribe, result.maxSales];
};

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000]
    ],
    [7000, 9000]
  )
);

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900]
    ],
    [1300, 1500, 1600, 4900]
  )
);
