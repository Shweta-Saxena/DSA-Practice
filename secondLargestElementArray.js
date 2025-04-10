const arr = [1,2,4,7,7,5];

function secondLargestElementArray(arr){
    let largest = 0;
    let secondLargest = 0;

    for(let i=0; i <= arr?.length - 1;i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
        if(secondLargest < arr[i] && arr[i] !== largest ){
            secondLargest = arr[i]
        }
    }

    return {largest, secondLargest};
}

console.log(secondLargestElementArray(arr));