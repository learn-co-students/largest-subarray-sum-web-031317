let largestSubarraySum = array => {
   let currentSum = array[0]
   let bestSum = array[0]

   for (let i = 1; i < array.length; i++){
     currentSum = Math.max(array[i], currentSum + array[i])
    //  console.log('currentSum', currentSum)
     bestSum = Math.max(currentSum, bestSum)
    //  console.log('bestSum', bestSum)
   }
   return bestSum
 }

 // largestSubarraySum(array)
