const deconstruct = (number: number) => {
  let sign = 1;
  let coefficient = number; // 계수
  let exponent = 0; //지수

  number = sign * coefficient * 2 ** exponent;

  // 계수에서 부호 제거
  if (coefficient < 0) {
    coefficient = -coefficient;
    sign = -1;
  }

  // 계수가 0이 될 때까지 2로 나누고, 나눈 횟수를 -1128에 더해서 지수를 구함
  // -1128은 Number.MIN_VALUE의 지수 값에서 유효숫자의 비트개수, 보너스 비트개수를 뺀 값
  if (Number.isFinite(number) && number !== 0) {
    exponent = -1128;
    let reduction = coefficient;

    // Number.MIN_VALUE 보다 작은 수도 0 처리 됨
    while (reduction !== 0) {
      exponent += 1;
      reduction /= 2;
    }

    reduction = exponent;
    while (reduction > 0) {
      coefficient /= 2;
      reduction -= 1;
    }

    while (reduction < 0) {
      coefficient *= 2;
      reduction += 1;
    }
  }

  return {
    sign,
    coefficient,
    exponent,
    number,
  };
};

console.log("deconstruct", deconstruct(Number.MAX_SAFE_INTEGER));
