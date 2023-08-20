/**
 * @desc problem : 덧칠하기
 * @desc site : Programmers
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/161989
 * @desc level: 1
 */

const solution = (wallSize, rollerSize, sections) => {
  let lastPaintIndex = 0;
  const paintMap = new Map();
  const wall = Array.from(Array(wallSize).keys()).map((item) => item + 1); //[1,2,3,4]

  console.log('벽', wall);

  wall.forEach((block, index) => {
    const section = sections.shift();
    if (block !== section) {
      sections.unshift(section);
      paintMap.set(block, false);
      return;
    }
    paintMap.set(block, true);
  });

  paintMap.forEach((requirePaint, block) => {
    if (requirePaint) {
    }
  });

  console.log(paintMap);

  //   wall.forEach((block, index) => {
  //     const section = sections.shift();
  // -
  //     if (block !== section && lastPaintIndex < section) {
  //       console.log('응??..');
  //       sections.unshift(section);
  //       return;
  //     }
  //     console.log('페인트!!');
  //     lastPaintIndex = index + rollerSize;
  //     wall.splice(index, rollerSize);
  //   });
  //   console.log(wall);
};

solution(8, 4, [2, 3, 6]); //2
// solution(5, 4, [1, 3]); //1
// solution(4, 1, [1, 2, 3, 4]); //4
