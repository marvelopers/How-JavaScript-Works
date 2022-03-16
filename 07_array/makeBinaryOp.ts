const makeBinaryOp = (func) => {
  return (myLittleArray: []) => {
    let wunth = myLittleArray.pop();
    let zeroth = myLittleArray.pop();
    myLittleArray.push(func(zeroth, wunth));
    return myLittleArray;
  };
};

const addOP = makeBinaryOp((zeroth, wunth) => zeroth + wunth);
const mulOP = makeBinaryOp((zeroth, wunth) => zeroth * wunth);

const add = (reduction, element) => reduction + element;

// reduce
const myLittleArray = [3, 5, 7, 11];

const total = myLittleArray.reduce(add, 0);
