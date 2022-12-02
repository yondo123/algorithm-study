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
    let productMap = new Map();

    //array to map
    want.forEach((item, index) => {
        productMap.set(item, number[index]);
    });

    for (let index = 0; index < slice; index++) {
        if (!want.length) {
            return 1;
        }
        const product = discount[index];

        if (productMap.has(product)) {
            productMap.set(product, productMap.get(product) - 1);
        }
    }

    for (let index = slice; index < discount.length; index++) {
        let nextFlag = true;
        const product = discount[index];
        const prevProduct = discount[index - slice];
        // console.log(index - slice + 2 + "회차");
        // console.log(prevProduct, product);

        for (let count of productMap.values()) {
            if (count > 0) {
                nextFlag = false;
                break;
            }
        }

        if (nextFlag) {
            return index - slice + 1;
        }
        if (productMap.has(prevProduct)) {
            productMap.set(prevProduct, productMap.get(prevProduct) + 1);
        }

        if (productMap.has(product)) {
            productMap.set(product, productMap.get(product) - 1);
        }
    }

    return 1;
}

const answer = solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
);

console.log(answer);
