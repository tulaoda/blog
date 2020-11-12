function makeMap(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const count = map.get(num)
        if (count) {
            map.set(num, count + 1)
        } else {
            map.set(num, 1)
        }
    }
    return map
}

const arr1 = [1, 4, 3, 1, 5]
const arr2 = [2, 4, 3, 2, 5]

const getCollect = function (nums1, nums2) {
    const map1 = makeMap(nums1)
    const map2 = makeMap(nums2)
    console.log('map1', map1)
    const res = []
    for (let num of map1.keys()) {
        const count1 = map1.get(num)
        const count2 = map2.get(num)
        if (count2) {
            const times = Math.min(count1, count2)
            for (let i = 0; i < times; i++) {
                res.push(num)
            }
        }
    }
    return res
}

const res = getCollect(arr1, arr2)
console.log('res', res)
