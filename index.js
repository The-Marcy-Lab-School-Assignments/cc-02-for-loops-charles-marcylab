//1
function countToTen(){
  for(let i = 1; i <= 10; i++){
    console.log(i);  
  }
}

//2
function countFromOne(number){
  for(let i = 1; i <= number; i++){
    console.log(i);
  }
}

//3
function countEveryEven(num){
  for(let i = 2; i <= num; i+=2){
    console.log(i);
  }
}

//3%
function countEveryEven(num){
  for(let i = 1; i <= num; i++){
    if (i %2 === 0){
      console.log(i)
    }
    }
}

// //4
// function countEveryOdd(int){
//   for(let i = 1; i <= int; i+=2){
//     console.log(i);
//   }
// }

// //4%

// function countEveryOdd(num){
//   for(let i = 1; i <= num; i++){
//     if (i %2 !== 0){
//       console.log(i)
//     }
// }
//5 
function countEvens(nums){
  let count = 0
  for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 0){
          count+=1
      }
  }  
  return count
}

// //countToTen()
// //countFromOne(8)
// //countEveryEven(20)
// //countEveryOdd(20)
 console.log(countEvens([5,6,3,9,4,2,8,2]))