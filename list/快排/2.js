function quickSort(arr, left = 0, rightPionter = arr.length - 1) {
  if (left >= rightPionter) {
    return;
  }
  let index = partition(arr, left, rightPionter);
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, rightPionter);
}
function partition(arr, left, rightPionter) {
  let pivotValue = arr[rightPionter];
  let i = left - 1; //哨兵
  for (let j = left; j <=rightPionter - 1; j++) {
    const element = arr[j];
    if (arr[j] <= pivotValue) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[rightPionter]] = [arr[rightPionter], arr[i + 1]];
  return i + 1;
}

let arr =[3,5,7,5,9,6,0,2,6,]
quickSort(arr)
console.log( arr);