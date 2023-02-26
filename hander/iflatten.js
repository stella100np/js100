let arr = [1, [2, [3, 4, 5]]];
/**
 *
 * @param {Array} arr
 */
function flatting(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
            result = result.concat(flatting(element))
        }else {
            result.push(element)
        }
    }
    return result
}
