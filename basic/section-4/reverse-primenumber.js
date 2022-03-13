/**
 * @desc problem : 뒤집은 소수
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : 에라토스테네스의 체 공식
 */

/**
 * solution
 * @param {array} numArray : 대상 숫자
 */
function solution(numArray) {
    const answer = [];

    /**
     * 소수 판별 (에라토스테네스의 체)
     * @param {number} number 
     */
    function isPrime(number){
        if(number < 2) return false;
        for(let i = 2; i < parseInt(number/2); i++){
            if(number % i < 1) return false;
        }
        return true;
    }

    //역수 변환
    numArray.forEach(function (item, index) {
        const reverse = Number(String(item).split('').reverse().join(''));
        if(isPrime(reverse)){
            answer.push(reverse);
        }
    });

    return answer;
}

const answer = solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
console.log(answer); //23 2 73 2 3
