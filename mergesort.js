function split(arr) {
  let midIdx = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midIdx);
  const secondHalf = arr.slice(midIdx);
  return [firstHalf, secondHalf];
}

function merge(arrays) {
  let arrA = arrays[0];
  let arrB = arrays[1];
  let result = [];
  while (arrA.length && arrB.length) {
    let el
    if(arrA[0] < arrB[0]) {
      el = arrA.shift()
    } else {
      el = arrB.shift()
    }
    result.push(el)
  }
  if(arrA.length) result = result.concat(arrA)
  if(arrB.length) result = result.concat(arrB)

  return result
}

function mergeSort(array) {
  if(array.length <= 1) return array
  const splitArr = split(array)
  const left = mergeSort(splitArr[0])
  const right = mergeSort(splitArr[1])
  console.log('LEFT: ', left, ' RIGHT: ', right)
  return merge([left, right])
}
