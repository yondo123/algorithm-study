/**
 * @desc problem : 아나그램
 * @desc site : Olympiad
 * @desc level: 2
 * @desc solution : Map
 */

/**
 * solution
 * @param {string} wordA : 단어 배열 A
 * @param {string} wordB : 단어 배열 B
 */
function solution(wordA, wordB) {
    const wordMap = new Map();
    let answer = 'YES';

    //비교 대상 길이가 다르면 거짓
    if (wordA.length !== wordB.length) {
        answer = 'NO';
    } else {
        //해쉬화
        [...wordA.split(''), ...wordB.split('')].forEach(function (item) {
            wordMap.has(item) ? wordMap.set(item, wordMap.get(item) + 1) : wordMap.set(item, 1);
        });

        //아나그램 검증
        for (const item of wordMap) {
            if (item[1] % 2) {
                answer = 'NO';
                break;
            }
        }
    }
    return answer;
}

const answer = solution('AbaAeCe', 'baeeACA');
console.log(answer); //YES
