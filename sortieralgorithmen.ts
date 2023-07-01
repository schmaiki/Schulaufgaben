function BubbleSort(list: number[]): number[] {
    const len = list.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]];
            }
        }
    }
    return list;
}

function InsertionSort(list: number[]) {
    let temp: number;
    let j: number;
    for (let i = 1; i < list.length; i++) {
        temp = list[i];
        j = i - 1;
        while (j >= 0 && list[j] > temp) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = temp;
    }
    return list;
}


const unsortiert = [4, 2, 3, -1]
const bubble = BubbleSort(unsortiert)
console.log(bubble)
const insertion = InsertionSort(unsortiert)
console.log(insertion)