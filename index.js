let largestSubarraySum = array => {
  let currentSum = array[0]
  let bestSum = array[0]

  for (let i = 1; i < array.length; i++){
    currentSum = Math.max(array[i], currentSum + array[i])
    bestSum = Math.max(currentSum, bestSum)
  }
  return bestSum
}

let largestSubArray = array => {
  let currentSum = array[0]
  let bestSum = array[0]
  let startIndex = 0
  let endIndex = 0

  for (let i = 0; i < array.length; i++){
    // currentSum = Math.max(array[i], currentSum + array[i])
    if (array[i] > currentSum + array[i]){
      currentSum = array[i]
      startIndex = i
    }else{
      currentSum += array[i]
    }

    if (bestSum < currentSum){
      bestSum = currentSum
      endIndex = i
    }
    // bestSum = Math.max(bestSum, currentSum)
  }
  return array.slice(startIndex, endIndex)
  // return bestSum
}
