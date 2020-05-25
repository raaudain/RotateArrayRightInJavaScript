
function rotateRight(array, rotations) {
    const arr = array.map(i => i);

    // rotations-- decrements 1 from the number of rotations
    while (rotations--){
        // Remove last element in the array
        let temp = arr.pop();
        // Insert removed element to the beginning of the array
        arr.unshift(temp);
    }

    return arr;
}

rotateRight([1,2,3,4,5,6], 3);