/* ---------------------------------------------------------------------- */
/* Closure.                                                               */
/* ---------------------------------------------------------------------- */

// 함수는 함수 자체가 태어난 환경을 기억한다.

function first() {
  let x = 10;
  function second() {
    let y = 30;
    x + y;
  }
  return second;
}

const value = first();

function number() {
  let count = 0;
  function inner() {
    return ++count;
  }
  return inner;
}
