/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;

console.log(String(YEAR));

// undefined -> 'undefined'
// null -> ''null'
//
let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0;
let cutie = true;
console.log(cutie * 1);

// string

let num = "   123";
console.log(num * 1);

// numeric string
let width = "32.23120px";
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ------------------------------------ */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
