const refine = (collection, path) => path.reduce((refinement, element) => {
  try {
    return refinement[element]
  } catch (ignore) {}
}, collection)   

const by = (...keys) => {
  const paths = keys.map((element) => element.toString().split("."))

  return (first: string, second: string) => {
    let firstValue; 
    let secondValue;

    if(paths.every((path)=> {
      firstValue = refine(first, path)
      secondValue = refine(second, path)
      return firstValue === secondValue
    })){
      return 0;
    }

    const compareConditions = (typeof firstValue === typeof secondValue) ? firstValue < secondValue : typeof firstValue < typeof secondValue;
    
    return (compareConditions) ? -1 : 1
  };
};


