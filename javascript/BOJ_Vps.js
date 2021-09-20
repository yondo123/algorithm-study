/**
 * @desc site : Baekjoon Onlie Judge
 * @desc level: S4
 * @desc url  : https://www.acmicpc.net/problem/9012
 */

const fs = require("fs");
const { off } = require("process");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputCount = input.length;
let buffer = [];
const open = "(";
const close = ")";

for (let index = 1; index < inputCount; index++) {
    buffer = input[index].split("");
    if (validationSameCount()) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

function validationSameCount(data) {
    let validateFlag = true;
    const status = [];
    if (buffer[0] === close) {
        validateFlag = false;
    } else {
        buffer.forEach((item, index) => {
            if (item == open) {
                status.push(item);
            } else if (status.length && item == close) {
                status.pop();
            } else {
                validateFlag = false;
            }
        });
    }

    if (status.length) {
        validateFlag = false;
    }
    return validateFlag;
}
