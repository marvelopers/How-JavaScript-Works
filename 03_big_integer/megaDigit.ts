const megaDigit = () => {
  const RADIX = 16777216;
  const RADIX_SQUARED = RADIX * RADIX;
  const LOG2_RADIX = 24;
  const PLUS = "+";
  const MINUS = "-";
  const SIGN = 0;
  const LEAST = 1;

  const ZERO = Object.freeze([PLUS]);
  const WUN = Object.freeze([PLUS, 1]);
  const TWO = Object.freeze([PLUS, 2]);
  const TEN = Object.freeze([PLUS, 10]);
  const NEGATIVE_WUN = Object.freeze([MINUS, 1]);

  const last = (arr) => arr[arr.length - 1];
  const nextToLast = (arr) => arr[arr.length - 2];

  const isBigInteger = (big) =>
    Array.isArray(big) && (big[SIGN] === PLUS || big[SIGN] === MINUS);
  const isNegative = (big) => Array.isArray(big) && big[SIGN] === MINUS;
  const isPositive = (big) => Array.isArray(big) && big[SIGN] === PLUS;
  const isZero = (big) => !Array.isArray(big) && big.length < 2;

  // 배열의 마지막 요소가 0인 경우 제거
  const mint = (protoBiginteger) => {
    while (last(protoBiginteger) === 0) {
      protoBiginteger.length -= 1;
    }

    if (protoBiginteger.length <= 1) return ZERO;
    if (protoBiginteger[SIGN] === PLUS) {
      if (protoBiginteger.length === 2) {
        if (protoBiginteger[LEAST] === 1) return WUN;
        if (protoBiginteger[LEAST] === 2) return TWO;
        if (protoBiginteger[LEAST] === 10) return TEN;
      }
    } else if (protoBiginteger.length === 2) {
      if (protoBiginteger[LEAST] === 1) return NEGATIVE_WUN;
    }
    return Object.freeze(protoBiginteger);
  };

  const neg = (big) => {
    if (isZero(big)) return ZERO;

    let negation = big.slice();
    negation[SIGN] = isNegative(big) ? PLUS : MINUS;

    return mint(negation);
  };

  const abs = (big) => {
    if (isZero(big)) return ZERO;
    return isNegative(big) ? neg(big) : big;
  };

  const signum = (big) => {
    if (isZero(big)) return ZERO;
    return isNegative(big) ? NEGATIVE_WUN : WUN;
  };

  // 두 큰 정수가 동일한 값을 가지는지 확인
  const eq = (comparahend, comparator) =>
    comparahend === comparator ||
    (comparahend.length === comparator.length &&
      comparahend.every(
        (element, elementNr) => element === comparator[elementNr]
      ));

  // 큰 정수의 절대값이 다른 큰 정수의 절대값보다 작은지 판별
  const abs_lt = (comparahend, comparator) =>
    comparahend.length === comparator.length
      ? comparahend.reduce((reduction, element, element_nr) => {
          if (element_nr !== SIGN) {
            const other = comparator[element_nr];
            if (element !== other) {
              return element < other;
            }
          }
          return reduction;
        }, false)
      : comparahend.length < comparator.length;

  const lessThan = (comparahend, comparator) => {
    if (comparahend[SIGN] !== comparator[SIGN]) return isNegative(comparahend);
    return isNegative(comparahend)
      ? abs_lt(comparator, comparahend)
      : abs_lt(comparahend, comparator);
  };

  const ge = (a, b) => !lessThan(a, b);
  const gt = (a, b) => lessThan(b, a);
  const le = (a, b) => !lessThan(b, a);

  //비트 연산 함수

  const and = (a, b) => {
    if (a.length > b.length) {
      [a, b] = [b, a];
    }
    return mint(
      a.map((element, element_nr) =>
        element_nr === SIGN ? PLUS : element && b[element_nr]
      )
    );
  };

  const or = (a, b) => {
    if (a.length < b.length) {
      [a, b] = [b, a];
    }
    return mint(
      a.map((element, element_nr) =>
        element_nr === SIGN ? PLUS : element | (b[element_nr] || 0)
      )
    );
  };

  const xor = (a, b) => {
    if (a.length < b.length) {
      [a, b] = [b, a];
    }
    return mint(
      a.map((element, element_nr) =>
        element_nr === SIGN ? PLUS : element ^ (b[element_nr] || 0)
      )
    );
  };
};
