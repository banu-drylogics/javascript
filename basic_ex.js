// function prime(n){
//     var result = []
//     for(var i = 2; i<n; i++){
//         (n % i == 0) ?  result.push(true) : result.push(false)
//     }
//      const a = result.includes(true) ? `${n} is not prime` : `${n} is prime`
//      return a
// }
// console.log(prime(23))


// function oddEven(n){
//     const result = (n % 2 == 0) ? `${n} is even` : `${n} is odd`
//     return result
// }

// console.log(oddEven(97))

// var oddEven = (n) =>
//     {
//         const result = (n % 2 == 0) ? `${n} is even` : `${n} is odd`
//         return result
//     }

// console.log(oddEven(22))


// function fabnacci(n){
//     var a = 0
//     var b = 1;
//     var nxt = 0;
//     var c = 1;
//     var result = []
//     while (c <= n + 1){
//         if(c <= 1){
//             nxt = c
//         }
//         else{
//             nxt = a + b;
//             a = b;
//             b = nxt;
//         }
//         c+=1;
//         result.push(nxt)
//     }
//     return result
// }

// console.log(fabnacci(21));

// var factorial =(n) => {
//     var result = 1;
//         for(var i = 1; i<=n; i++){
//             result = result * i
//         }
//     return result
// }

// console.log(factorial(5))



// function armStrong(num){
//     var temp = num;
//     var sum = 0;
//     while(num!== 0) {
//         num = (num/10);
//         sum = Math.round(sum+(num%10)*(num%10)*(num%10));
//         console.log(sum)
//     }
//     var result = (temp === sum) ? `${temp} is Armstrong` : `${temp} is not Armstrong`;
//     return result
// }
// console.log(armStrong(153))


// function armStrong(n){
//     const i = String(n).length;
//     const value = String(n).split("").reduce(function(sum, str){
//         return sum + Math.pow(parseInt(str), i)
//         console.log(str)
//     }, 0)
//     const result = n == value ? `${n} is Armstrong` : `${n} is not Armstrong`;
//     return result
// }
// console.log(armStrong(54748))

function palindrome(n){
    const value = [n].reduce (function(sum, num){
        console.log(num, sum)
        return sum = sum * 10 + (num%10)

    },n)
    const result = n == value ? `${n} is a palindrome` : `${n} is not a palindrome`
}


// function palindrome(n){
//     var temp = n;
//     var sum  = 0;
//     while (n!==0) {
//         var rem = n%10;
//         n = Math.floor(n/10);
//         sum = sum*10+rem
//     }
//     var result
//     result = (temp === sum) ? `${temp} is a palindrome` : `${temp} is not a palindrome`
//     return result
// }

console.log(palindrome(11))
