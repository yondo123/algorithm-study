/**
 * @desc problem : 공원 산책
 * @desc site : Programmers
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/172928
 * @desc level: 1
 */

const solution = (park, routes) => {
  const width = park[0].length;
  const height = park.length;
  const obstacle = 'X';
  const start = 'S';
  const position = [0, 0];
  const parkMap = park.map((row, index) => {
    if (row.includes(start)) {
      position[0] = index;
      position[1] = row.indexOf(start);
    }
    return row.split('');
  });

  const isCanMove = (x, y) => {
    if (x < 0 || x > height - 1) {
      return false;
    }
    if (y < 0 || y > width - 1) {
      return false;
    }
    if (parkMap[x][y] === obstacle) {
      return false;
    }

    return true;
  };

  routes.forEach((route) => {
    let moveFlag = true;
    const [x, y] = position;
    const [direction, count] = route.split(' ');
    for (let i = 1; i <= Number(count); i++) {
      switch (direction) {
        case 'N':
          if (!isCanMove(x - i, y)) {
            moveFlag = false;
          }
          break;
        case 'S':
          if (!isCanMove(x + i, y)) {
            moveFlag = false;
          }
          break;
        case 'E':
          if (!isCanMove(x, y + i)) {
            moveFlag = false;
          }
          break;
        case 'W':
          if (!isCanMove(x, y - i)) {
            moveFlag = false;
          }
          break;
      }
    }

    if (moveFlag) {
      position[0] = direction === 'N' ? x - Number(count) : direction === 'S' ? x + Number(count) : x;
      position[1] = direction === 'E' ? y + Number(count) : direction === 'W' ? y - Number(count) : y;
    }
  });

  return position;
};

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));

// S O O
// O X X
// O O O
