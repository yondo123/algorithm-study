/**
 * @desc problem : 개인정보 수집 유효기간 (KAKAO 2023 BLIND)
 * @desc site : 프로그래머스
 * @desc link :https://school.programmers.co.kr/learn/courses/30/lessons/150370
 * @desc level: 1
 */

/**
 *
 * @param today {string} 기준 날짜
 * @param terms {array<string>} 약관 유효 기간 배열
 * @param privacies {array<string>} 수집 정보 배열
 */
const solution = (today, terms, privacies) => {
  const numericForToday = Number(today.replace(/[^0-9]/g, ""));
  const termMap = new Map();
  const MAX_DATE_OF_MONTH = 28;

  terms.forEach((term) => {
    const [type, expMonth] = term.split(" ");
    termMap.set(type, expMonth);
  });

  const result = privacies.map((privacy, index) => {
    const [date, type] = privacy.split(" ");
    const signDate = new Date(date);
    let expYear = signDate.getFullYear();
    const monthOfSignDate = signDate.getMonth();
    const dateOfSignDate = signDate.getDate();
    const remainingDate = MAX_DATE_OF_MONTH - dateOfSignDate;
    const calculateAdditionalDate =
      MAX_DATE_OF_MONTH * termMap.get(type) - remainingDate;
    const extraMonth =
      remainingDate === MAX_DATE_OF_MONTH - 1 || remainingDate === 0 ? 0 : 1;
    const calculateAdditionalMonth =
      Math.floor(calculateAdditionalDate / MAX_DATE_OF_MONTH) + extraMonth;
    let expMonth = monthOfSignDate + calculateAdditionalMonth + 1;
    const expDate =
      (calculateAdditionalDate % MAX_DATE_OF_MONTH) - 1 < 1
        ? MAX_DATE_OF_MONTH + (calculateAdditionalDate % MAX_DATE_OF_MONTH) - 1
        : (calculateAdditionalDate % MAX_DATE_OF_MONTH) - 1;

    if (expMonth > 12) {
      expYear += Math.floor((expMonth - 1) / 12);
      expMonth = ((expMonth - 1) % 12) + 1;
    }

    const expTotalDate = Number(
      expYear +
        String(expMonth).padStart(2, "0") +
        String(expDate).padStart(2, "0")
    );

    return numericForToday > expTotalDate ? index + 1 : 0;
  });

  return result.filter((item) => item > 0);
};

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

console.log(solution("2020.12.17", ["A 12"], ["2010.01.01 A", "2019.12.17 A"]));
