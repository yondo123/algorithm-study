/**
 * @desc problem : 일곱 난쟁이
 * @desc site : Olympiad
 * @desc level: 1
 */

/**
 * solution
 * @param {array} height
 */
function solution(height) {
    const fakeDwarfs = [];
    const max = 100;
    const totalHeight = height.reduce(function (acc, item) {
        return acc + item;
    });

    height.forEach(function (item, index, array) {
        const sliceIndex = index + 1;
        const compare = array.slice(sliceIndex);
        compare.forEach(function (compareItem, compareIndex) {
            if (totalHeight - (item + compareItem) === max) {
                fakeDwarfs.push(sliceIndex + compareIndex);
                fakeDwarfs.push(index);
            }
        });
    });

    fakeDwarfs.forEach(function (item) {
        height.splice(item, 1);
    });

    return height;
}

const answer = solution([20, 7, 23, 19, 10, 15, 8, 13, 25]);
console.log(answer);
