function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be compared
        let current = arr[i];
        // Initialize a variable for the index of the previous element
        let j = i - 1;

        // Shift elements of the sorted segment forward
        // if they are greater than the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
const array = [9, 3, 7, 4, 1, 5];
console.log("Original Array:", array);
console.log("Sorted Array:", insertionSort(array));
