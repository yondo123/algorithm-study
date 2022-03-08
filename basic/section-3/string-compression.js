/**
 * @desc problem : 문자열 압축
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 임시 배열 활용
 */

/**
 * solution
 * @param {string} str : 대상 문자열
 */
function solution(str) {
    const answer = [];
    let temp = [];

    for (let i = 0; i < str.length; i++) {
        const compareChar = temp[0];
        const char = str[i];

        //비교대상이 없을경우
        if (!compareChar) {
            temp.push(char);
            continue;
        }

        if (compareChar !== char) {
            answer.push(compareChar);
            if (temp.length > 1) {
                answer.push(temp.length.toString());
            }
            temp = [];
        }
        temp.push(char);
    }

    if (temp.length > 1) {
        answer.push(temp.length);
    }
    answer.push(temp.pop());

    return answer.join('');
}

const answer = solution('KKHSSSSSSSE');
console.log(answer); //K2HS7E
