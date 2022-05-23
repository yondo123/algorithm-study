/**
 * @desc problem : 모든 아나그램 찾기
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : Map, 슬라이딩 윈도우
 */

/**
 * solution
 * @param {string} str : 대상 문자열
 * @param {string} anagramStr : 부분 문자열
 */
function solution(str, anagramStr) {
    let temp = '';
    const anagrams = [];
    const strArr = str.split('');
    const range = anagramStr.length;

    function isAnagram(target) {
        let result = true;
        const wordMap = new Map();
        [...anagramStr.split(''), ...target.split('')].forEach(function (item) {
            wordMap.has(item) ? wordMap.set(item, wordMap.get(item) + 1) : wordMap.set(item, 1);
        });

        for (const item of wordMap) {
            if (item[1] % 2) {
                result = false;
                break;
            }
        }
        if (result) {
            anagrams.push(target);
        }
    }

    for (let i = 0; i < range; i++) {
        temp += strArr[i];
    }
    isAnagram(temp);

    for (let i = range; i < strArr.length; i++) {
        temp = '';
        for (let k = i - (range - 1); k <= i; k++) {
            temp += strArr[k];
        }
        isAnagram(temp);
    }
    return anagrams.length;
}

const answer = solution('bacaAacba', 'abc'); //3 ('bac', 'acb', 'cba')
