type Combinable = number | string;
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: 'as-number' | 'as-text',
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2
    } else {
      result = input1.toString() + input2.toString()
    }
    return result
  }
  
  const combinedAges = combine(30, 21, 'as-number');
  const combinedAgesString = combine('30', '21', 'as-number');
  const combinedNames = combine('anna', 'robin', 'as-text');
  
  console.log({combinedAges})
  console.log({combinedAgesString})
  console.log(combinedNames)