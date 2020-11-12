//https://leetcode-cn.com/problems/boats-to-save-people/
const boatNumber = (people, limit) => {
    people.sort((a, b) => a - b)
    let num = 0
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++
        }
        right--
        num++
    }
    return num
}

const people = [1, 2, 3, 4]
const limit = 3

const num = boatNumber(people, limit)
console.log('num :>> ', num)
