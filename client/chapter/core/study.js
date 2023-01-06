/* const palindrome = (str) => {
  // 해당 문자열의 길이가 1이거나 0이면(처음부터 0, 1이거나 회문 검사를 끝까지 통과했거나)
  if (str.length <= 1) {
    return true;
  }
  // 배열의 길이 -1 이면 마지막 인덱스라고 선언!
  const lastIndex = str.length - 1;

  // 첫 글자와 마지막 글자가 같으면
  if (str[0] === str[lastIndex]) {
    // (동일한) 첫 글자와 마지막 글자를 제외한 글자를 다시 회문 검사
    return palindrome(str.slice(1, lastIndex));
  } else {
    // 검사 도중 첫 글자와 마지막 글자가 같지 않으면 false
    return false;
  }
};

console.log(palindrome("l"));
console.log(palindrome("기러기"));
console.log(palindrome("토마토"));
console.log(palindrome("별똥별"));
console.log(palindrome("우영우"));
console.log(palindrome("김제제"));
 */ /* 

function ArrQuiz(input, from, to) {
  //파라메타 3개 받아와야해
  const solution = Array.from(input); //숫ㅅㅎㅅ
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === from) {
      solution[i] = to;
    }
  }
  return solution;
}

const doubleArrow = (x) => ({
  name: "Study4",
});
console.log("doubleArrow", doubleArrow(1));
 */

// <value값이 통일되게 급여 단위를 "~만원"으로 맞추는 함수 작성하기>

/* const payDay = {
  짱구: 300,
  철수: "130만원",
  맹구: "500만원",
  훈이: 150,
  유리: "380만원",
};

for(var i in payDay)
{
  if(Object.keys(payDay[i])).endsWith('만원') !== 0 {
    alert("만원으로 끝나지 않음!")
  }
}
 */

let array1 = [3, 4, 5, 67, 3, 2, 33, 5, 66, 7];
let array2 = [494, 5, 4, 22, 35, 6, 8, 50, 9];

let compare = function (arr1, arr2) {
  let sum_arr1 = 0;
  let sum_arr2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum_arr1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum_arr2 += arr2[i];
  }
  if (sum_arr1 > sum_arr2) {
    return `${array1}`;
  } else if (sum_arr1 < sum_arr2) {
    return `${array2}`;
  } else {
    return "두 배열의 합이 같당";
  }
};

console.log(compare(array1, array2));
