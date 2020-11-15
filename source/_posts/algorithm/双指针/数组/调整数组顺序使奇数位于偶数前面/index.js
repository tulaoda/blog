---
abbrlink: 23
---
function reOrderArray(array) {
    if (Array.isArray(array)) {
        let start = 0
        let end = array.length - 1
        while (start < end) {
            while (array[start] % 2 === 1) {
                start++
            }
            while (array[end] % 2 === 0) {
                end--
            }
            if (start < end) {
                [array[start], array[end]] = [array[end], array[start]]
            }
        }
    }
    return array
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const res = reOrderArray(arr)

console.log('res :>> ', res)
