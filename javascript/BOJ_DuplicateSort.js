/**
 * @desc problem : 중복 빼고 정렬하기
 * @desc site : Baekjoon Onlie Judge
 * @desc level: S5
 * @desc url  : https://www.acmicpc.net/problem/10867
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("../temp.txt").toString().trim().split("\n");
let answer = "";
const inputArray = input.slice(1).map((item) => Number(item));
const sortedArray = quickSort(inputArray);

sortedArray.forEach((element, index) => {
    answer += element;
    if (sortedArray.length - 1 === index) {
        console.log(answer);
    }
    answer += "\n";
});

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    //배열의 마지막 인덱스를 pivot으로 설정
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    //복사한 배열을 loop -> pivot보다 작으면 leftArray, 크면 rightArray
    for (const item of array.slice(0, array.length - 1)) {
        if (item < pivot) {
        } else if (item > pivot) {
            rightArr.push(item);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
