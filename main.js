function repeats(arr){
    const newArr = arr.filter((item, index) => arr.indexOf(item) === arr.lastIndexOf(item))
    return newArr.reduce((a,b) => a+b)
  };


console.log(repeats([1,2,1,2,3,7])) // => 10
console.log(repeats([1,2,3,3,4,2,57,1,7,9,3,9,7])) // => 61 
console.log(repeats([7,67,6,67,6,8])) // => 15