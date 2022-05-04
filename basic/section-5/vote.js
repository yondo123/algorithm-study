/**
 * @desc problem : 학급회장 투표
 * @desc site : Olympiad
 * @desc level: 2
 * @desc solution : Map
 */

/**
 * solution
 * @param {array} vote : 투표 배열
 */
function solution(vote) {
    const voteMap = new Map();
    let answer = '';
    let maxCount = 0;
    vote.forEach(function (item) {
        //투표 이력이 없을 경우 set, 있을 경우 카운팅 추가
        voteMap.has(item) ? voteMap.set(item, voteMap.get(item) + 1) : voteMap.set(item, 1);

        if (voteMap.get(item) > maxCount) {
            maxCount = voteMap.get(item);
            answer = item;
        }
    });

    return answer;
}

const answer = solution(['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C', 'B', 'D', 'E', 'D', 'E']);
console.log(answer); //C (5)
