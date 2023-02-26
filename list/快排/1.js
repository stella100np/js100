// https://gist.github.com/adonese/4bf34d5b57ee0358626c
function quickSort(A, l = 0 , r = A.length - 1) {
  
    if(l < r){
      // Partition with a random pivot and get its index
      let pi = randomizedPartition(A,l,r);
 
      // Recursively sort left and right subarrays of pi
      quickSort(A,l ,pi -1 );
      quickSort(A ,pi +1 ,r);
    }
 
 }
 
 function randomizedPartition(A,l,r){
    // Generate a random number between l and r
    let i = Math.floor(Math.random() * (r - l + 1)) + l;
 
    // Swap A[i] with A[r]
    [A[i], A[r]] = [A[r], A[i]];
 
    // Use Lomuto partition scheme with A[r] as pivot
    return partition(A,l,r);
 
 }
 
 function partition(A,l,r){
    let x = A[r]; // Pivot element
    let i = l - 1; // Index of smaller element
 
    for(let j=l; j<=r-1; j++){
       if(A[j]<=x){
          i++; // Increment index of smaller element
 
          // Swap current element with index
          [A[i], A[j]] = [A[j], A[i]];
       }
    }
 
    // Swap pivot element with index+1 position
    [A[i+1], A[r]] = [A[r], A[i+1]];
 
    return i+1; // Return index of pivot
 
 }
let arr =[3,5,7,5,9,6,0,2,6,]
quickSort(arr)
console.log( arr);