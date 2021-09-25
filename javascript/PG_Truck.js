/**
 * @desc site : programmers
 * @desc level: 2
 * @desc url  : https://programmers.co.kr/learn/courses/30/lessons/42583#
 */

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    //다리 상태 큐 초기화
    const bridgeQueue = new Array(bridge_length).fill(0);
    //모든 트럭이 지나갈 때 까지 반복
    while (bridgeQueue.length) {
        const truckWeight = truck_weights[0];
        bridgeQueue.shift();
        const totalWeight = getTotalWeight(bridgeQueue);
        if (truckWeight) {
            //건널 트럭 + 현재 건너는 중인 트럭이 허용중량 이하일 때
            if (totalWeight + truckWeight <= weight) {
                bridgeQueue.push(truck_weights.shift());
            } else {
                //만약 모두 건넜을 때에는 예외로 허용
                if (!getTotalWeight(bridgeQueue)) {
                    bridgeQueue.push(truck_weights.shift());
                } else {
                    bridgeQueue.push(0);
                }
            }
        }
        answer++;
    }
    return answer;
}

/**
 * @desc : 배열 합계 구하기(다리를 지나는 트럭의 총 중량)
 */
function getTotalWeight(array) {
    if (array.length) {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        const totalWeight = array.reduce(reducer);
        return totalWeight;
    }
}
