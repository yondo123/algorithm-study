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
    const testLength = test[0].toString().split('').length;
    const answer = [];

    for (let i = 1; i <= testLength; i++) {
        console.log('대상', i);
        const mentee = [];
        for (let j = 0; j < test.length; j++) {
            const testCase = test[j];
            let isCheck = false;

            for (const char of testCase.toString()) {
                console.log(mentee);

                if (isCheck) {
                    mentee.push(char);
                }

                if (!isCheck && Number(char) == i) {
                    isCheck = true;
                }
            }

        }
        console.log('===========');
    }
}

const answer = solution([3412, 4321, 3142]);
console.log(answer); //23 2 73 2 3
