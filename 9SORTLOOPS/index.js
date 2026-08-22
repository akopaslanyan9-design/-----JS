const array = [1, 40, -5, 10, 0];

for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;

    while ( j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
    }
        array[j + 1] = current;
}

console.log(array);