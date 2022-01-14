/**
 * @desc problem : 중복단어제거
 * @desc site : Olympiad
 * @desc level: 1
 * @desc problem : includes를 활용한 풀이
 */

/**
 * solution
 * @param {array} word : 단어 배열
 * @returns
 */
function solution(word) {
    let output = [];
    word.forEach(function (item) {
        if (!output.includes(item)) {
            output.push(item);
        }
    });

    return output.join('\n');
}

const answer = solution(['good', 'time', 'good', 'time', 'student']);
console.log(answer); //kset
