/**
 * @desc problem : 끝말잇기
 * @desc site : programmers
 * @desc level: 2
 */

/**
 * solution
 * @param {number} n : 참가수
 * @param {array} words : 끝말잇기 배열
 */
function solution(n, words) {
    const roundWords = [words[0]];
    let index = 1;
    let lastChar = words[0].substr(-1);
    let round = 1;

    while (index < words.length) {
        const word = words[index];
        if (!(index % n)) {
            round++;
        }
        //중복 단어 체크
        if (roundWords.includes(word) || word.substr(0, 1) !== lastChar) {
            break;
        }

        roundWords.push(word);
        lastChar = word.substr(-1);
        index++;
    }

    if (roundWords.length === words.length) {
        return [0, 0];
    } else {
        return [(index % n) + 1, round];
    }
}

const answer = solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']); //[3,3]
