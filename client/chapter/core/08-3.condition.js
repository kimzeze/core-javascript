/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime; /*

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

// let time = prompt("시간을 입력해줘");

// switch (time) {
//   case "아침":
//     alert("뉴스 기사 글을 읽는다.");
//     break;
//   case "점심":
//     alert("자주 가는 식당에 가서 식사를 한다.");
//     break;
//   case "저녁":
//     alert("동네 한바퀴를 조깅한다.");
//     break;
//   case "밤":
//     alert("친구에게 전화를 걸어 수다를 떤다.");
//     break;
//   case "새벽":
//   case "심야":
//     alert("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
//     break;
// }

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */
/* 
let num = +prompt("숫자를 입력하세요");

switch (num) {
  case 0:
    console.log("일");
    break;
  case 1:
    console.log("월");
    break;
  case 2:
    console.log("화");
    break;
  case 3:
    console.log("수");
    break;
  case 4:
    console.log("목");
    break;
  case 5:
    console.log("금");
    break;
  case 6:
    console.log("토");
    break;
}

*/
// 쉼표 연산자

var x, y, z;
(x = 1), (y = 2), (z = 3);
// 3반환

var d = 0;
(d += 1), (z = 3);
// 이건 왜 1 반환?


// (d += 1), (d = 3);
 */
/* 
let a, b, c;

(a = b = 3), (c = 4); // 콘솔에서 4를 반환
console.log(a); // 3(가장 왼쪽)

let x, y, z;

x = ((y = 5), (z = 6)); // 콘솔에서 6을 반환
console.log(x); // 6(맨 오른쪽)

 */
/* 
let num = prompt("숫자 입력해주세요");

if (num % 2 == 1) {
  console.log("홀수입니다.");
} else {
  console.log("짝수입니다.");
}
 */
/* 
var income = +prompt("예금액을 입력하시오.");
var futureIncome = 0;
function incomePlus(income) {
  if (income < 50000) {
    futureIncome = income * 1.15;
  } else {
    futureIncome = income * 1.2;
  }
  return futureIncome;
}
console.log(incomePlus(income));
 */

// let userName = prompt('사용자 아이디를 입력해주세요.','');

// // console.log(userName);
// if(userName?.toLowerCase() === 'admin'){

//   let pw = prompt('비밀번호를 입력해 주세요.','');

//   if(pw?.toLowerCase() === 'themaster'){
//     console.log('환영합니다.');
//   }else{
//     console.log('취소되었습니다.');
//   }
// }else if(userName.replace(/\s*/g,'') === '' || userName === null){
//   console.log('취소했습니다.');
// }else{
//   console.log('인증되지 않은 사용자 입니다.');
// }
