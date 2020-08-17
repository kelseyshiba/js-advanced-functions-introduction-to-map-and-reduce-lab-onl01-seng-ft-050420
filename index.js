// Your code here
//return a new array [1,2,3,9]
function mapToNegativize(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (Math.sign(sourceArray[i]) === -1) {
      newArray.push(Math.abs(sourceArray[i]))
    } else { 
      newArray.push(-Math.abs(sourceArray[i]))
    } 
  } return newArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  let doubleArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    doubleArray.push(sourceArray[i] * 2)
  } return doubleArray
}

function mapToSquare(sourceArray) {
  let squaredArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    squaredArray.push(sourceArray[i]**2);
  } return squaredArray
}

//reduce -- remember to return a value [1,2,3]
// function reduceToTotal(sourceArray, startingPoint=0) {
//   for (let i = 0; i < sourceArray.length; i++) {
//     if (sourceArray.length === 0) {
//       return startingPoint
//     } else {
//       let result = sourceArray[i] + startingPoint
//       startingPoint = result
//     }
//   }
// }

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    let trueArray = [];
    if (sourceArray[i]) === true) {
      trueArray.push(sourceArray[i])
    } else {
      return false
    }
  } if (trueArray === sourceArray) {
    return true
  } else {
    return false
  }
}

function reduceToAnyTrue(sourceArray) {
  
}