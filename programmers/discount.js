/**
 * @desc problem : 할인 행사
 * @desc site : Programmers
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/131127
 * @desc level: 2
 * @desc solution : 슬라이딩 윈도우
 */

/**
 * solution
 * @param {array} want : 구매 품목
 * @param {array} number : 구매 갯수
 * @param {array} discount : 할인 품목
 */
function solution(want, number, discount) {
    const slice = 10;
    let answer = 0;
    let productMap = new Map();

    //array to map
    want.forEach((item, index) => {
        productMap.set(item, number[index]);
    });

    for (let index = 0; index < slice; index++) {
        let nextFlag = true;
        const product = discount[index];

        if (productMap.has(product)) {
            productMap.set(product, productMap.get(product) - 1);
        }

        for (let count of productMap.values()) {
            if (count > 0) {
                nextFlag = false;
            }
        }

        if (nextFlag) {
            answer++;
        }
    }

    for (let index = slice; index < discount.length; index++) {
        let nextFlag = true;
        const product = discount[index];
        const prevProduct = discount[index - slice];

        if (productMap.has(prevProduct)) {
            productMap.set(prevProduct, productMap.get(prevProduct) + 1);
        }

        if (productMap.has(product)) {
            productMap.set(product, productMap.get(product) - 1);
        }

        for (let count of productMap.values()) {
            if (count > 0) {
                nextFlag = false;
            }
        }

        if (nextFlag) {
            answer++;
        }
    }

    return answer;
}
const answer = solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
        'banana',
        'banana',
        'banana',
        'apple',
        'apple',
        'rice',
        'rice',
        'pork',
        'pork',
        'pot',
        'pot',
        'banana',
        'apple',
        'banana'
    ]
);

console.log(answer);
