/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10, 100, 1000, 10000];

console.log(typeof arr);
console.log(Array.isArray(""));

/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
console.log(arr);
// splice
arr.splice(1, 0, 23, 5);
console.log(arr);
// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
arr.sort((a, b) => {
  return a - b;
});
/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ["밥먹기", "미용실가기", "코딩공부하기"];

let template = todo.map((todoList) => {
  return `<li>${todoList} </li>`;
});

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

console.log(template);
let newArray = arr.map((item) => {
  return item * 2;
});

console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

console.log(arr.indexOf(100));
// lastIndexOf
// includes
console.log(arr.includes(10));
/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

let sumAge = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log("칭구들 나이를 모두 더한 값은 ? : ", sumAge);

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join
