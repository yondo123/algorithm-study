function bubbleSort(array) {
    const n = array.length;
    //마지막 인덱스 - 1 만큼 순회
    for (let i = 0; i < n - 1; i++) {
        let sortCnt = 0; //swap 시 누적되는 값으로, 순회시 값이 0 이면 정렬된 상태 -> break;
        //계속 감소하며 다음 비교 대상 위치를 위해 j 위치는 감소
        for (let j = n - 1; j > i; j--) {
            //앞쪽의 요소 < 현재 요소 이면 swap
            if (array[j - 1] > array[j]) {
                sortCnt++;
                const temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }

        if (!sortCnt) {
            break;
        }
    }

    return array;
}

/**
 * 향상된 버블정렬
 */
function improveBubbleSort(array) {
    const n = array.length;
    let k = 0; //swap시 교체한 인덱스 값
    if (n > -1) {
        //정렬한 인덱스가 비교할 인덱스보다 커져버리면 종료
        while (k < n - 1) {
            let last = n - 1;
            //n-1 부터 줄어가면서 왼쪽 인덱스와 비교
            for (let j = n - 1; j > k; j--) {
                if (array[j - 1] > array[j]) {
                    //swap 인 상황이면 last 변수에 해당 인덱스 저장
                    last = j;
                    const temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
            k = last;
        }
    }
    return array;
}
