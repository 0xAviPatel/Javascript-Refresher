// console.log(`object`);

// let js = 'Javascript'
// console.log(js.split(''));

// let js = 'Facebook,Amazon,Google'
// console.log(js.split(','));

// let numbers = [2,3,4,5]
// // console.log(numbers.shift());
// numbers.unshift(1)
// console.log(numbers);

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// console.log(ages);
// // console.log('youngest',ages[0]);
// console.log('youngest',ages.shift());
// //both are same

// // console.log('oldest',ages[ages.length-1]);
// console.log('oldest',ages.pop());
// //both are same

// console.log('median age',ages[ages.length/2]);
// let total = 0
// for(let i=0;i<ages.length;i++) {
//     // console.log(i);
//     total+=ages[i]
// }
// console.log(total);
// console.log(total/ages.length);

// let isRaining = false;
// isRaining ? (console.log(`It's not raining`)) : console.log(`It's raining`);

// const a = prompt('Enter age')
// a>18 ? console.log(`You can drive`) : console.log(`You are left with ${18-a} years to drive`);;

// const numbers = [1, 2, 4, 5, 7, 2];
// for(number of numbers) {
//     console.log(number);
// }

// numbers.forEach((value,index)=>{
//     console.log('value:',value,"index :",index);
// })

// const countries = ['India','Netherlands','Norway']
// countries.forEach((country,i,arr)=>{
//     console.log(`${i+1} : ${country}`);
// })

// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }

// const name = Object.entries(users)
// // console.log(name);
// for(let i = 0;i<name.length;i++) {
//     let arr = []
//     let b = name[i][1].skills.length
//     console.log('b:',b,typeof b);
//     pushArr = arr.push(b[i])
//     console.log(pushArr);
// }

// const user = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
// }

// for(key in user) {
//   console.log(key,":",user[key]);
// }

// const sumOfAll = (...args) => {
//   let sum = 0;
//   for (const val of args) {
//     // console.log(val);
//     sum+=val
//     // console.log(sum);
//   }
//   // console.log(args);
//   return sum
// };

// console.log(sumOfAll(10, 24, 3));

// const toUppercase = (para) => {
//   let arr = [];
//   for (country of para) {
//     arr.push(country);
//   }
//   return arr;
// };

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// console.log(toUppercase(countries));

// const swapValues = (a, b) => {
//   let c;
//   c = a;
//   a = b;
//   b = c;

//   return `swap value of ${b} = ${a} and ${a} = ${b}`;
// };

// console.log(swapValues(5, 8));

// const userIdGeneratedByUser = () => {
// //   const num = prompt("Enter the number");
// //   console.log(num);

//   const random = Math.ceil(Math.random()*23)
//   console.log(random);
// };

// userIdGeneratedByUser();

// const square = n => n**2

// const cube = (square,n) => {
//     return square(n)*n
// }
// console.log(cube(square,3));

// function sayHello() {
//     console.log(`hello`);
// }

// // setInterval(sayHello,1000)
// setTimeout(sayHello,2000)

// const numbers = [1,5,4]

// const [num1,num2,num3] = numbers
// console.log(num1);

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// const [frontend,backend] = fullStack

// console.log(frontend,backend);

// const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
// const [fin, , ice, , den] = countries
// console.log(fin, ice, den)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [num1, num2, num3, ...args] = nums;

// console.log(args);

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// for (let [country, capital] of countries) {
//   console.log(country, capital);
// }

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (const [first, second, third, fourth] of fullStack) {
//   console.log(first, second, third, fourth);
// }

// const rectangle = {
//   width: 20,
//   height: 10,
// };

// let { width, height, perimeter = 200 } = rectangle;
// console.log(width, height, perimeter);

// const countries = ["Finland", "Estonia", "Sweden", "Norway"];

// countries.forEach((item, index, arr) => {
//   // console.log(item, "item");
//   // console.log(index, "index");
//   console.log(arr, "arr");
// });

// const newCountries = []

// countries.forEach((country)=>newCountries.push(country.toUpperCase()))
// console.log(newCountries);

// const numbers = [1, 2, 3, 4, 5];
// sum = 0;

// numbers.forEach((num) => (sum += num));
// console.log(sum);

// const countries = ["Finland", "Estonia", "Sweden", "Norway"];

// // newCountries = countries.map((country) => country.toUpperCase());
// // console.log("🚀 ~ file: index.js ~ line 260 ~ newCountries", newCountries)
// // console.log(newCountries);

// countryLength = countries.map((country) => country.length);
// console.log("🚀 ~ file: index.js ~ line 264 ~ countryLength", countryLength);

const numbers = [1,2,3,4,5]
square = numbers.map((num)=>num**2)
console.log("🚀 ~ square", square)
