function binarySearch(list, element) {
    let start = 0;
    let end = list.length - 1; 
    while (start <= end) {
        var arr(mid) = (start + end) / 2;
        if (arr(mid) === element) {
            return mid;
        }
        else if (mid < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}
