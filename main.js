
function rotateRight(array, rotations) {
    const arr = array.map(i => i);

    // rotations-- decrements 1 from the number of rotations
    while (rotations--){
        let temp = arr.shift()
        // console.log(temp)
        arr.unshift(arr.push(temp));
    }

    return arr;
}

rotateRight([1,2,3,4,5], 4);