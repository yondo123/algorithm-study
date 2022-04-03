/**
 * @desc problem : 졸업선물
 * @desc site : Olympiad
 * @desc level: 4
 * @desc solution : 2차원배열 + 완전탐색
 */

/**
 * solution
 * @param {array} priceList : 선물 가격 리스트
 * @param {number} budget : 총 예산
 */
function solution(priceList, budget) {
    let answer = 0;
    //학생 수
    const studentLength = priceList.length;
    //선물 구성 가격 길이
    const priceLength = priceList[0].length;
    //정답 로그
    const log = [];

    for (let order = 0; order < studentLength; order++) {
        const orderList = [];
        let totalCost = 0;
        let orderCount = 1;

        for (let i = 0; i < studentLength; i++) {
            let price = 0;
            let delivery = 0;
            for (let j = 0; j < priceLength; j++) {
                //j가 0일때 상품가격, 1일때 배송비
                if(j < 1){
                    price = priceList[i][j];
                    //50% 쿠폰 적용가
                    if(order === i){
                        price = priceList[i][j] / 2;
                    }
                }else{
                    delivery = priceList[i][j];
                }

                if(price&&delivery){
                    orderList.push(price + delivery);
                }
            }
        }

        //선물 완전탐색
        for (let k = 0; k < studentLength; k++) {
            totalCost = orderList[order];
            orderCount = 1;
            for (let l = k; l < orderList.length; l++) {
                const item = orderList[l];

                if(l !== order && totalCost + item <= budget){
                    orderCount++;
                    totalCost += item;
                    if(answer < orderCount){
                        log.push(`경우의수 : ${order} 회차, ${totalCost}, 구입횟수 : ${orderCount}`);
                        answer = orderCount;
                    }
                }else{
                    break;
                }
            }
        }
    }
    console.log(log[log.length - 1]);
    return answer;
}

const answer = solution([[6,6], [2,2], [4,3], [4,5], [10,3]], 28);
console.log(answer); 
