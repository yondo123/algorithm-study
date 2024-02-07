/**
 * @desc problem : Pascal's Triangle
 * @desc site : leetcode
 * @desc link : https://leetcode.com/problems/pascals-triangle/description/
 * @desc level: 1
 */

/**
 * generate
 * @param numRows {number}
 */
const generate = (numRows) => {
  const rowArray = Array.from({ length: numRows });
  rowArray[0] = [1];
  if (numRows >= 2) {
    rowArray[1] = [1, 1];
    for (let i = 2; i < rowArray.length; i++) {
      const row = Array.from({ length: i + 1 }).fill(1);
      for (let j = 0; j < row.length; j++) {
        if (j >= 1 && j < row.length - 1) {
          row[j] = rowArray[i - 1]?.[j - 1] + rowArray[i - 1]?.[j];
        }
      }
      rowArray[i] = row;
    }
  }
  return rowArray;
};

generate(5);
