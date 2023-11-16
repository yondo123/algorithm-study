/**
 * @desc problem : 햄버거 만들기
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/133502
 * @desc level: 1
 */

const compareTwoArray = (arrA, arrB) => {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
};
/**
 * solution
 * @param ingredient array<number> 햄버거 재료
 */
const solution = (ingredient) => {
  const material = [1, 2, 3, 1];
  let materialStack = [];
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    materialStack.push(ingredient[i]);
    if (materialStack.length >= 4) {
      if (compareTwoArray(materialStack.slice(-4), material)) {
        materialStack.pop();
        materialStack.pop();
        materialStack.pop();
        materialStack.pop();
        answer += 1;
      }
    }
  }
  return answer;
};
solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]); //5
solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); //2
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); //0
