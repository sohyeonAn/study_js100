// 문제14 : 3의 배수 인가요?
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

// 입출력
// 입력 : 3
// 출력 : 짝

// 입력 : 2
// 출력 : 2

// 박누리 답안
let num = prompt("369 369! 369 369!");
result = num % 3 === 0 ? "짝" : num;

console.log(`입력 : ${num}
출력 : ${result}`);

// 안소현 답안
// let n = prompt('369! 369! 지금은 무슨 숫자의 순서야?');
// n % 3 === 0 ? console.log('짝👏') : console.log(n);


// 이승연 답안
// function findNum(n) {
//   if (n % 3 === 0) {
//     console.log('짝');
//   } else {
//     console.log(n);
//   }
// }
// findNum(prompt('3의 배수 인가요?'));

//김초연 답안
// function Game369 (number) {
//     if(typeof number === 'number') {
//         if(number % 3 === 0 ) {
//             console.log('짝');
//         } else {
//             console.log(number);
//         }
//     } else {
//         console.log('잘못된 입력 값입니다!!!');
//     }
// }
// Game369(3);
// Game369(2);
// Game369('야');
