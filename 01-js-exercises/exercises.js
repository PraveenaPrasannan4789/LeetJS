//write a closure function

function closureExample() {
  let count = 0;
  return function add() {
    count++;
    console.log(count);
    return count;
  };
}

const val = closureExample();
console.log("returned value", val());
