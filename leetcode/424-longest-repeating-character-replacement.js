/**
 * @desc problem : characterReplacement
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/longest-repeating-character-replacement/
 * @desc level: 2
 */

/**
 *
 * @param s {string} 대상 문자열
 * @param k {number} 변경 가능 횟수
 */
const characterReplacement = (s, k) => {
  const frequencyChar = {};
  let left = 0;
  let right = 0;
  let duplicateLength = 0;

  while (right < s.length) {
    const targetChar = s[right];
    frequencyChar[targetChar] = frequencyChar[targetChar] ? frequencyChar[targetChar] + 1 : 1;
    const mostCount = Math.max(...Object.values(frequencyChar));
    const restCount = right - left + 1 - mostCount;

    if (restCount > k) {
      frequencyChar[s[left]] -= 1;
      left++;
    } else {
      duplicateLength = Math.max(right - left + 1, duplicateLength);
    }
    right++;
  }
  return duplicateLength;
};

characterReplacement('ABAB', 2);
// characterReplacement('AABABBA', 1);
