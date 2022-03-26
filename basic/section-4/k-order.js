/**
 * @desc problem : K번째 수
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution :
 */

/**
 * solution
 * @param {array} card : 카드배열
 * @param {number} k : 출력할 순위
 */
function solution(card, k) {
    let answer = 0;
    let slicePos = 0;
    let start = 1;
    let end = 0;
    const select = 3;
    const numberCase = card.length - (select - 1); //8

    for (let i = numberCase; i > 0; i--) {
        const loop = numberCase - i + 1;
        start = 1;
        end = 0;
        for (let j = 0; j < loop; j++) {
            end += numberCase - j;
            if (j + 1 < loop) {
                start = end + 1;
            }
        }
        if (k <= end) {
            slicePos = numberCase - i;
            break;
        }
    }

    const sotred = card
        .sort(function (a, b) {
            return b - a;
        })
        .slice(slicePos);

    answer = sotred[0] + sotred[1] + sotred[2 + k - start];

    return answer;
}

const answer = solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3);
console.log(answer); // 143
