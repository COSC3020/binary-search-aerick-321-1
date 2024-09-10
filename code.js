function binarySearch(list, element) {
    let start = 0;
    let end = list.length - 1; 
    let result = -1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (list[mid] === element) {
            result = mid;
            end = mid-1;
        }
        else if (list[mid] < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return result;
}
