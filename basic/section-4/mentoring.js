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
    const testCase = [];
    //경우의 수를 구하기 위한 테스트케이스 2차원 배열 생성
    test.forEach(function (item) {
        this.push(item.toString().split(""));
    }, testCase);

    const person = testCase[0].length;

    for (let p = 0; p < person; p++) {
        const mento = (p + 1).toString();
        let count = 0;

        for (let i = 0; i < test.length; i++) {
            for (let j = 0; j < person; j++) {
                if(mento === testCase[i][j]){
                    console.log(mento, "정답");
                }
            }
        }
    }
}

const answer = solution([3412, 4321, 3142]);
// console.log(answer); //23 2 73 2 3
