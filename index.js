// // 1-masala
// function ildiz(num){
//     let res = Math.sqrt(num)
//     return res;
// }
// let num = 9;
// let result =ildiz(num)
// console.log(result);

// 2-masala
// function sum(a,b){
//     let res = a-b;
//     return res;
// }
// let a = 9;
// let b = 5;
// let result =sum(a,b)
// console.log(result);

// // 3-masala
// function string(str,num){
//     let result = '';
//    for( let i = 0; i < num; i++){
//     result+=str;
//    }
//     return result;
// }
// let a = 'Salom'
//  let b = "3";
//  let res =string(a, b);
//  console.log(res);
//   4-masala
// function num(a){
//     let res = a*a*a;
//     return res;
// }
// let b = 3;
//  let result =num(b);
//  console.log(result);

// 6-masala
// function asr(yil){
//     let counter = Math.ceil(yil/100)
//     return counter
// }
// let yil =1905;
// let counter =asr(yil);
// console.log(counter);

// 8-masala
// function harif(str){

//     let res = "aeiouAEIOU";
//     let counter = 0;
//     for( let chat of str){
//         if(res.includes(chat)){
//             counter++;
//         }
//     }
//     return counter;
// }
// let string = "Salom"
// let count = harif(string)
// console.log(count);

// // 10-masala
// function subs(str ,num){
//     if( num > str){
//         return str
//     }
//     return str.slice(-num)
// }

// console.log(subs("salom ,IShlar qale!" ,10));

//  11-masala
// function pow(num ,base){
//     return num**base
// }

// console.log((pow( 2,6)));

// // 12-masala
// function matn(str){
//     return str.trim()
// }
// let res = matn(   "Salom va Xayir"    )
// console.log(res);

// || MASSIV||

// 1-masala

// function num( a, b){
//     let res = a + b ;
//     return res; 
// }
// let res = num(8 ,100)
// console.log(res);

// 2-masala

// function maxNum (a , b){
//   let max ;
//     if( a > b){
//     max = a;
//   }else{
//     max = b
//   }
//   return max;
// }

// let max  = maxNum( 100 , 8)
// console.log(max);

// 3-masala
// function reverArray(arr) {
//     return arr.reverse();
//   }
//   let input = [1, 2, 3, 4, 5];
//   let reversed= reverArray(input);
//   console.log(reversed);
  
// 4-masala
// function musbat(arr){
//     return arr.filter(num => num >= 0)
// }
// let res = [1, -2, 3, -4, 5]
// let result = musbat(res)
// console.log(result);

// 5-masala

// function num(arr){
//     let res = arr **2;
//     return res;
// }

// let a = [ 8]
// let result = num(a)
// console.log(result);

// 6-masala
// function num(arr){
//     return [... new Set(arr)]
// }
// let res = [1,1,3,2,4,5,5,6,6,77,88,]
// let result =num(res)
// console.log(result);

// 7-masala
// function num( arr1, arr2){
//     return[...new Set([ ...arr1, ...arr2])]
// }
// let num1 = [ 1,2,3,4]
// let num2 = [5,6,7,8,9]
// let res = num( num1, num2)
// console.log(res);
// 8-masala
// function num(arr){
//     return arr.filter( num => num % 2 !== 0).length;   
// }
// let a = [1,2,4,5,6,7,9]
// let res =num(a)
// console.log(res);

// 10-masala
function num(arr){
    return Math.min(...arr)
}
let res = [ 1,2,3,4,5,6,7,8,9]
let result = num(res)
console.log(result);