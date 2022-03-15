/**
 * @desc problem : 멘토링
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution :
 */

/**
 * solution
 * @param {array} test : 시험결과
 */
function solution(test) {
    const testCase = test[0].toString().split('').length;

    for (let i = 1; i <= testCase; i++) {
        const mentee = [];
        test.forEach(function (item) {
            let checkFlag = false;
            for (const char of item.toString()) {
                if (checkFlag) {
                    mentee.push(char);
                }
                if (!checkFlag && Number(char) == i) {
                    checkFlag = true;
                }
            }
        });
        console.log(mentee);
        console.log('대상', i);
        console.log('===========');
    }
}

const answer = solution([3412, 4321, 3142]);
console.log(answer); //23 2 73 2 3
