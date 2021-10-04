function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    //배열의 마지막 인덱스를 pivot으로 설정
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    //복사한 배열을 loop -> pivot보다 작으면 leftArray, 크면 rightArray
    for (const item of array.slice(0, array.length - 1)) {
        if (item < pivot) {
            leftArr.push(item);
        } else if (item > pivot) {
            rightArr.push(item);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
