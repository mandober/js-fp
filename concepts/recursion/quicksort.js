/*
QuickSort (qs)

Like merge sort, quicksort is also recursive divide-and-conquer algorithm. Its
use of divide-and-conquer strategy is different then mergesort's; in mergesort,
the divide step does hardly anything with the work happening in combine step.
Quicksort is the opposite; all work happens in the divide step, while the
combine step does little.

- in place sorting (mutation)
- its worst-case is as bad as selection sort's and insertion sort's: Θ(n^2)
- its average-case is as good as mergesort's: Θ(nlog^2 n)

However, in practice quicksort outperforms merge sort, and it
significantly outperforms selection sort and insertion sort.

Strategy:
Sort a subarray `[p..r]`, which is initially `[0..n-1]`.

1. Divide by choosing a "pivot" element (middle or other).
   1.1 Partitioning:
       Place elements that are LE then the pivot to its LEFT.
       Place elements that are GT then the pivot to its RIGHT.
       [...l <= p < ...r]

       For example:
       subarray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
       Choosing the last element as the pivot, after partitioning we get:
       subarray = [5, 2, 3, 6, 12, 7, 14, 9, 10, 11]
   1.2 Let q be the index of where the pivot ends up.

2. Conquer by recursively sorting the subarrays
   array[p..q-1] and array[q+1..r]
*/

function quickSort(arr, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = arr.length - 1;

    if (lo < hi) {
        // partition the array
        var p = partition(arr, lo, hi);
        console.log('partition from, ' + lo + ' to ' + hi + ' => partition: ' + p);
        // sort subarrays
        quickSort(arr, lo, p - 1);
        quickSort(arr, p + 1, hi);
    }

    // for initial call, return a sorted array
    if (hi - lo === arr.length - 1) return arr;
}


function partition(arr, lo, hi) {
    // choose last element as pivot
    var pivot = arr[hi];

    // keep track of index to put pivot at
    var pivotLocation = lo;

    // loop through subarray and if element <= pivot, place element before pivot
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) swap(arr, pivotLocation++, i);
    }

    swap(arr, pivotLocation, hi);
    return pivotLocation;
}

function swap(arr, index1, index2) {
    if (index1 === index2) return;
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log('swapped', arr[index1], arr[index2], 'in', arr);
    // console.log('swapped ' + arr[index1] + ' ' + arr[index2] + ' in ' + arr);
    return arr;
}

quickSort([1, 4, 3, 56, 9, 8, 7, 5]);

console.log('algo');
console.log('go');
console.log('quicksort','\n','sorting','sort','sorting');
console.log('lgo');
