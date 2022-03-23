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
    const revolve = card.length - 2; //8
    const sotred = card.sort(function (a, b) {
        return b - a;
    });

}

const answer = solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3);
console.log(answer); //3
