/**
 * @desc problem : 대충 만든 자판
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/160586
 * @desc level: 1
 */

const solution = (keymap, targets) => {
  const keyMap = new Map();
  keymap.forEach((keys) => {
    for (let i = 0; i < keys.length; i++) {
      const keyArray = keyMap.get(i);
      const key = keys.charAt(i);
      if (keyArray) {
        keyMap.set(i, [...keyArray, key]);
        continue;
      }
      keyMap.set(i, [key]);
    }
  });

  const result = targets.map((targetKeys, index) => {
    let searchCount = -1;
    for (let i = 0; i < targetKeys.length; i++) {
      const targetKey = targetKeys.charAt(i);
      let isFound = false;
      for (let [key, value] of keyMap) {
        if (value.indexOf(targetKey) > -1) {
          isFound = true;
          searchCount += key + 1;
          break;
        }
      }
      if (!isFound) {
        return -1;
      }
    }
    return searchCount + 1;
  });
  return result;
};

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
console.log(solution(['BC'], ['AC', 'BC'])); //-1,3
console.log(solution(['ABCE'], ['ABDE'])); //-1
