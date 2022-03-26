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
    const select = 3;
    const numberCase = card.length - (select - 1); //8

    for (let i = numberCase; i > 0; i--) {
        const loop = numberCase - i + 1;
        let end = 0;
        let start = 0;
        for (let j = 0; j < loop; j++) {
            end += numberCase - j;
            if (j === loop) {
                console.log('start', end);
            }
        }
        console.log(end);
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

    console.log(sotred);

    // 8 * 1; 8
    // 8 * 2 - 1; 15
    // 8 * 3 - 3; 21
    // 8 * 4 - 6 :

    /**
     * 1 ~ 8 : (8) * * 1 8 + 0
     * 9 ~ 15 (7) 8 + 7
     * 16 ~21 (6) 8 + 7 + 6
     * 22 ~ 26 (5)
     * 27  ~ 30 (4)
     * 31 ~ 33 (3)
     * 34 ~ 35 (2)
     * 36 (1)
     */
}

const answer = solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 10);
// console.log(answer);
