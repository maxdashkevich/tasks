let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function changeArray(arr) {

    let cur = 0;
    let swap = 0;
if (arr.length % 2 !== 0) {
    
    for (let i = 0; i < Math.round(arr.length / 2) - 1; i++) {
        cur = arr[i];
        swap = arr[Math.round(arr.length / 2) + i];
        arr[i] = swap;
        arr[Math.round(arr.length / 2) + i] = cur;
    }
} else {
    
    for (let i = 0; i < arr.length / 2; i++) {
        cur = arr[i];
        swap = arr[(arr.length / 2) + i];
        arr[i] = swap;
        arr[(arr.length / 2) + i] = cur;
    }
}
    return arr;
}

console.log(changeArray(arr));
console.log(changeArray(array));