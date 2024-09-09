function binarySearch(list, element) {
    let start = 0;
    let end = list.length - 1; 
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (list[mid] === element) {
            return mid;
        }
        else if (list[mid] < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}
