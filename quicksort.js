// Divide and Conquer technique - Quick sort
var quicksort = (list) => {
    var n = list.length;
    qsolve(list, 0, n - 1);
    return list;
}

var qsolve = (list, low, hi) => {
    if (low < hi) {
        var p = partition(list, low, hi);
        qsolve(list, low, p - 1);
        qsolve(list, p + 1, hi);
    }
}

var partition = (list, low, hi) => {
    var pivot = list[hi];
    var i = low;

    for (var j = 0; j < hi; ++j) {
        if (list[j] < pivot) {
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
            i++;
        }
        console.log(list);
    }

    var temp = list[i];
    list[i] = list[hi];
    list[hi] = temp;

    return i;
}

(function main() {
    console.log(quicksort([2, 1, 4, 3]));
}());