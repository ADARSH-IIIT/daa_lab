function selectionSort(arr) {


    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;


        /// finding min element index

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {

            //// swapping with min element
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));




//////////// tc = n2   and tc for swapping o(n)
///////////   sc = o(1)

//////////   worst case descending arr    5,4,3,2,1   
/////////     best case already sorted , tc = o(n2)     tc for swappingo(1)  as no swapping is there
