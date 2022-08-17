/**
 * @desc problem : 후위식 연산 (postfix)
 * @desc site : Olympiad
 * @desc level: 3
 * @desc solution : stack
 */

/**
 * 계산 함수
 */
const calculator = {
    add: function (left, right) {
        return left + right;
    },
    sub: function (left, right) {
        return left - right;
    },
    div: function (left, right) {
        return left / right;
    },
    mul: function (left, right) {
        return left * right;
    }
};

/**
 * solution
 * @param {array} str : 연산식 문자열
 */
function solution(str) {
    const operator = ['+', '-', '*', '/'];
    const strArray = str.split('');
    const operatorStack = [];

    strArray.forEach(function (item, index) {
        if (operator.includes(item)) {
            const right = operatorStack.pop();
            const left = operatorStack.pop();
            switch (item) {
                case '+':
                    operatorStack.push(calculator.add(left, right));
                    break;
                case '-':
                    operatorStack.push(calculator.sub(left, right));
                    break;
                case '*':
                    operatorStack.push(calculator.mul(left, right));
                    break;
                case '/':
                    operatorStack.push(calculator.div(left, right));
                    break;
                default:
                    console.log('잘못된 연산');
                    break;
            }
        } else {
            operatorStack.push(Number(item));
        }
    });

    return operatorStack.pop();
}

const answer = solution('352+*9-'); //12
console.log(answer);
