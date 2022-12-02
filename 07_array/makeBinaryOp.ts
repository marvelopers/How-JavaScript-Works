type FuncType = (zeroth: number, wunth: number)=> number

const makeBinaryOp = (func:FuncType) => {
  return (myLittleArray: number[]) => {
    let wunth = myLittleArray.pop();
    let zeroth= myLittleArray.pop();
    myLittleArray.push(func(zeroth as number, wunth as number));
    return myLittleArray;
  };
};

const addOP = makeBinaryOp((zeroth, wunth) => zeroth + wunth);
const mulOP = makeBinaryOp((zeroth, wunth) => zeroth * wunth);

const add = (reduction, element) => reduction + element;

// reduce
const myLittleArray = [3, 5, 7, 11];

const total = myLittleArray.reduce(add, 0);
