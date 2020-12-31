let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {
    let result = [];
    let sum = numbers.reduce(function(prevSum, current) {
      result.push(prevSum);
      return prevSum + current;
    });
    result.push(sum);
  
    return result;
}