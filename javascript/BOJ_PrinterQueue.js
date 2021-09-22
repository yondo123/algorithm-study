/**
 * @desc site : Baekjoon Onlie Judge
 * @desc level: S3
 * @desc url  : https://www.acmicpc.net/problem/1966
 */
const fs = require("fs");
const { off } = require("process");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("../dummy.txt").toString().trim().split("\n");
const count = input.length;
let seq = 0;
let printCount = 0;
let targetImp = 1;
let targetSeq = 0;

for (let index = 1; index < count; index++) {
    if (index % 2) {
        seq = Number(input[index].split(" ")[1]);
    } else {
        printSequence(input[index].split(" "));
        seq = 0;
        printCount = 0;
        targetSeq = 0;
        targetImp = 1;
    }
}

function printSequence(printArray) {
    const targetImp = Number(printArray[seq]);
    let sequence = 0;

    const filterPrintArray = printArray
        .map((item, index, array) => {
            const importance = Number(item);
            if (importance >= targetImp) {
                sequence += 1;
                if (index === seq) {
                    targetSeq = sequence - 1;
                }
                return (array[index] = {
                    pos: sequence - 1,
                    importance: importance,
                });
            }
        })
        .filter((item) => {
            return item !== undefined;
        });

    while (true) {
        const element = filterPrintArray[0];
        const position = element.pos;
        const importance = element.importance;
        if (importance === getMaxValue(filterPrintArray).importance) {
            printCount++;
            filterPrintArray.shift();
            if (position === targetSeq) {
                break;
            }
        } else {
            //가장 뒤에 다시 배치
            filterPrintArray.shift();
            filterPrintArray.push({
                pos: position,
                importance: importance,
            });
        }
    }

    console.log(printCount);
}

function getMaxValue(array) {
    const max = array.reduce(function (prev, current) {
        return prev.importance > current.importance ? prev : current;
    });

    return max;
}
