/**
 * @desc problem : 멘토링
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 4차원 배열 (모든 경우의 수 탐색)
 */

/**
 * solution
 * @param {array} test : 시험결과
 */
function solution(test) {
    let answer = 0;
    const testCase = [];
    //경우의 수를 구하기 위한 테스트케이스 2차원 배열 생성
    test.forEach(function (item) {
        this.push(item.toString().split(''));
    }, testCase);

    const person = testCase[0].length;

    //멘토와 멘티 경우의 수
    for (let mento = 1; mento <= person; mento++) {
        for (let mentee = 1; mentee <= person; mentee++) {
            let count = 0;
            //시험의 경우의 수
            for (let x = 0; x < test.length; x++) {
                let mentoRank = 0;
                let menteeRank = 0;
                for (let y = 0; y < person; y++) {
                    const target = testCase[x][y];
                    //순회하면서 멘토나, 멘티 후보의 차례이면 등수 저장
                    if (target == mento) {
                        mentoRank = y;
                    }
                    if (target == mentee) {
                        menteeRank = y;
                    }
                }
                //멘티 등수가 멘토 등수보다 낮을경우 (배열상에서 뒤에 위치할 때로 간주)
                if (mentoRank < menteeRank) {
                    count++;
                }
            }
            //각 멘토, 멘티의 시험 경우의 수에서 모든 시험 갯수만큼 조건 맞아야 인정한다.
            if (count === test.length) {
                answer++;
            }
        }
    }

    return answer;
}

const answer = solution([3412, 4321, 3142]);
console.log(answer); //3
