/**
 * @desc problem : 바탕화면 정리
 * @desc site : Programmers
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/161990
 * @desc level: 1
 */

const solution = (wallpaper) => {
  const FILE = '#';

  let lux = -1; //시작 y
  let luy = -1; //시작 x
  let rdx = -1; //종료 y (+1)
  let rdy = -1; //종료 x (+1)

  wallpaper.forEach((row, col) => {
    const rowMap = row.split('');
    const firstFilePosition = rowMap.indexOf(FILE);
    const lastFilePosition = rowMap.lastIndexOf(FILE);
    if (firstFilePosition > -1) {
      if (col < lux || lux < 0) {
        lux = col;
      }

      if (firstFilePosition < luy || luy < 0) {
        luy = firstFilePosition;
      }

      if (col >= rdx || rdx < 0) {
        rdx = col + 1;
      }

      if (lastFilePosition >= rdy || rdy < 0) {
        rdy = lastFilePosition + 1;
      }
    }
  });

  return [lux, luy, rdx, rdy];
};

// solution(['.#...', '..#..', '...#.']); //[0, 1, 3, 4]
console.log(solution(['..', '#.'])); //[1,0,2,1]
console.log(solution(['..........', '.....#....', '......##..', '...##.....', '....#.....'])); // [1,3,5,8]
// solution(['..........', '.....#....', '......##..', '...##.....', '....#.....']); //[1,3,5,8]
