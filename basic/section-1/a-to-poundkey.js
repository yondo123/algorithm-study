/**
 * @desc problem : A를 #으로
 * @desc site : Olympiad
 * @desc level: 1
 */

/**
 * solution
 * @param {string} str
 */
function solution(str) {
    const strToArr = str.toUpperCase().split('');
    const target = 'A';

    return strToArr
        .map(function (item, index) {
            return item === target ? '#' : item;
        })
        .join('');
}

const answer = solution('BANANA');
console.log(answer); //B#N#N#
