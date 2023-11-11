/**
 * @desc problem : 옹알이 (2)
 * @desc site : 프로그래머스
 * @desc link : https://school.programmers.co.kr/learn/courses/30/lessons/133499
 * @desc level: 1
 */

/**
 * Solution
 * @param babbling {array<string>} 옹알이 단어 배열
 */
const solution = (babbling) => {
  const AVAILABLE_WORDS = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach((word) => {
    let lastBabbling = "";
    let eachCount = 0;
    let tempWord = word;

    while (tempWord.length) {
      console.log("TEMP-----------", tempWord);
      let findIndex = -1;
      for (let i = 0; i < AVAILABLE_WORDS.length; i++) {
        const babblingWord = AVAILABLE_WORDS[i];
        if (tempWord.indexOf(babblingWord.repeat(2)) > -1) {
          console.log("왜?");
          findIndex = -1;
          break;
        }
        if (
          tempWord.indexOf(babblingWord) > -1 &&
          lastBabbling !== babblingWord
        ) {
          findIndex = tempWord.indexOf(babblingWord);
          lastBabbling = babblingWord;
          break;
        }
      }

      if (findIndex > -1) {
        tempWord = tempWord.replace(lastBabbling, "/");
        eachCount += 1;
      } else if (!tempWord.replaceAll("/", "").length) {
        console.log("응?");
        tempWord = "";
        break;
      } else {
        console.log("응?/...");
        eachCount = 0;
        break;
      }
    }

    if (eachCount) {
      count += 1;
    }
  });

  return count;
};
console.log(solution(["aya", "yee", "u", "maa"])); //1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); //2 (aya+ye) (ye+ma+woo)
console.log(solution(["ayayeaya", "yeye"])); //1
console.log(solution(["yayae"])); //0
console.log(solution(["ayayeaya"])); //0
