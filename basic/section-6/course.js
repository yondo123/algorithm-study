/**
 * @desc problem : 교육과정 설계
 * @desc site : Olympiad
 * @desc level: 2
 * @desc solution : queue
 */

/**
 * Solution 함수
 * @param {string} required : 필수 코수
 * @param {string} course : 전체 코스
 */
function solution(required, course) {
    const requiredCources = required.split('');

    course.split('').forEach(function (item, index) {
        if (requiredCources.includes(item)) {
            const checkSubject = requiredCources.shift();
            if (checkSubject !== item) {
                requiredCources.push(checkSubject);
            }
        }
    });

    return requiredCources.length ? 'NO' : 'YES';
}

const answer = solution('CBA', 'CABA');
console.log(answer); //NO
