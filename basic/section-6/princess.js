/**
 * @desc problem : 공주 구하기
 * @desc site : Olympiad
 * @desc level: 2
 * @desc solution : queue
 */

/**
 * solution
 * @param {number} n : 참여 왕자의 수
 * @param {number} k : 제외되는 숫자
 */
function solution(n, k) {
    let count = 1;
    //왕자 배열 초기화
    const princeList = Array.from({ length: n }, function (item, index) {
        return index + 1;
    });

    while (princeList.length > 1) {
        const prince = princeList.shift();
        if (count === k) {
            count = 1;
        } else {
            princeList.push(prince);
            count++;
        }
    }

    return princeList.pop();
}

const answer = solution(8, 3);
console.log(answer); // 7
