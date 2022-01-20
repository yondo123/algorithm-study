/**
 * @desc problem : 보이는 학생
 * @desc site : Olympiad
 * @desc level: 2
 * @desc problem : filter를 활용한 풀이
 */

/**
 * solution
 * @param {array} student : 학생들의 키
 * @returns
 */
function solution(student) {
    let visibleCount = 0;
    let highest = 0;
    student.forEach(function (item, index) {
        if (index === 0 || item > highest) {
            visibleCount++;
            highest = item;
        }
    });
    return visibleCount;
}
const answer = solution([130, 135, 148, 140, 145, 150, 150, 153]);
console.log(answer); //5 
