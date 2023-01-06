/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

/* 
age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
"이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.
 */ /* 

let age = prompt("나이를 입력하세요");

if (age >= 14 && age <= 90) {
  alert("14세 이상 90세 이하에 속합니다!");
} else {
  alert("범위에 해당하지않습니다.");
}
 */
let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

let userName = prompt("WHO ARE YOU");

if (userName === "Admin") {
  let pw = prompt("password ?");
  if (pw === "TheMaster") {
    alert("Welcome back,,,");
  } else {
    alert("GET OUT!");
  }
} else if (userName === " " || userName === null) {
  alert("canceled");
} else {
  alert("GET OUT!");
}
