// let age = BigInt('123');
// console.log(age)

// let a = null
// console.log(a);

// a = Symbol('rohsan');
// console.log(a);


// // ** objects **
// let student = {
//     fullName: "roshan kalmthe",
//     age: 12,
//     cgpa: 8.1,
//     isPass: true
// };

// console.log(student.fullName);
// console.log(student['fullName']);


// let profile = {
//     userName: "roshan_kalmathe",
//     post: 195,
//     follower: 569000,
//     following: 55,
//     profileName: "Roshan Kalmathe"
// };

// console.log(profile['userName']);
// console.log(profile.following);
// console.log(profile.profileName);
// console.log(typeof profile);

//  // ***** operators *****

// let a = 8;
// let  b = 2;
// console.log("a is " , a , "\nb is " , b);
// console.log("a + b = " ,a+b);
// console.log("a - b = " ,a-b);
// console.log("a * b = " ,a*b);
// console.log("a / b = " ,a/b);
// console.log("a % b = " ,a%b);
// console.log("a ** b" , a**b);
// console.log("a++ " , a++);
// console.log("b++ " , b++);
// console.log("a is " , a , "\nb is " , b);
// console.log("++a " , ++a);
// console.log("++b " , ++b);

// console.log("a is " , a);
// a+=3;
// console.log("a is " , a);
// a-=3;
// console.log("a is " , a);


// let a = 5;
// let b = "5";

// console.log("a==b",a==b);
// console.log("a===b",a===b);

// console.log("a!==b ",a!==b);
// console.log("a!=b",a!=b);

// let a = 5;
// let b = "6"; // string -> Number
// console.log(a<b) ;

// let a = 5;
// let b = 6;
// console.log(a & b);
// console.log(9 | 12);
// console.log(9 & 12);

// let a = 6;
// console.log(7>1 || 7=="7");

// console.log(!0);

// let age = prompt('enter your age sir !!');

// if (age > 18) {
//     alert('you are now eligible for license');
// }
// else {
//     alert('not eligible');
// }


// let grade = prompt("enter the Grade of student");
// console.log(typeof(grade));

// if (0 < grade && grade < 49) {
//     console.log('F');
// }
// else if (50 < grade && grade < 59) {
//     console.log('D');
// }
// else if
//     (60 < grade && grade < 69) { console.log('C'); }
// else if (70 < grade && grade < 89) {
//     console.log('B');
// }
// else {
//     console.log('A')
// }

// let i = 0;
// for ( i = 0; i <=5; i++) {
//     console.log("Roshan Kalmathe");
// }
// console.log(i);

// // *** while loops *** */
// i = 10;
// while (i) {
//     console.log("i => " , i);
//     i--;
// }
//console.log(i);



// do{
//     console.log("i =>", i);
// }while(i);

// let num = 0;

// let name = "Roshan";
// for (let i of name) {
//     console.log(i);
//     num++;
// }
// console.log(num);


// let student = {
//     name: 'roshan',
//     roll: 200670131043,
//     sem: '8th'
// };

// for(const value in student) {
//     console.log("key => ",value," : ", student[value]);
// }

// let random = 25;

// let num ;
// while (1) {
//      num = prompt('Guess the number ');
//     if (num == random) {
//         console.log('Number is Founded');
//         break;
//     }
// }


// let name = 'sonu';
// console.log(name, ' length => ', name.length);
// name = 'roshan';
// console.log(name, ' length => ', name.length);
// console.log(name[4]);

// let num = 22;
// let specilStr = `roshan kalmathe ${num}`;
// console.log(specilStr);
// console.log('roshan kalmahte', num);



// let name = "Roshan";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name);


// let noun = '    abc     ';
// console.log(noun);
// console.log(noun.trim());


// console.log(name.slice(1,4));
// console.log(name.concat(" kalmathe"));
// console.log(name.replace('a','m'));
// console.log(name.charAt(2));
// console.log(name);



// name = prompt('enter your name please !!');
// let userName = '@' + name +name.length;
// console.log(userName);

// let mark = [1, 2, 3, 4, 'roshan'];
// // console.log(mark[0]);

// for (const iterator of mark) {
//     console.log(iterator);
// }

// let studentMark = [80,74,91,89,86,81];
// let sum = 0;
// for (const iterator of studentMark) {
//   sum +=  iterator;
// }
// console.log(sum/studentMark.length);



// let price = [250,150,120,800,900,450];
// for (let i=0; i<price.length; i++) {
//     price[i] = price[i]*.9;
// }


// for (const iterator of price) {
//     console.log(iterator);
// }

// let foods = ['Potato' , 'Bhindi' , 'Tomato' , 'Cucumber'];
// foods.push('Ravya');

// console.log(foods);
// console.log(foods.toString());

// let bollywood = ['Hrithik roshan', 'Varun dhavan', 'Ranbir Kapoor', 'Alia Bhatt'];
// let tollywood = ['Tapsee pannu', 'Allu Arjun'];
// let bhojpur = ['Pavan singh']

// let film = bollywood.concat(tollywood, bhojpur);
// console.log(film);

// console.log(bollywood.slice(1,3));
// bollywood.splice(2, 3, 101, 103);

// console.log(bollywood);
// bollywood.splice(1, 0, "roshan", "rekha");
// console.log(bollywood);

// console.log(bollywood.splice(2));
// console.log('real ' , bollywood);



// let companies = ["Bloomberg" , "Microsoft", "Uber" , "Google","IBM"  , "Netflix"];

// console.log(companies);
// companies.shift()
// console.log(companies);
// companies.splice(1,1,'Ola');
// console.log(companies);
// companies.splice(5,0,'Amazon');
// console.log(companies);


// function print() {
//     console.log("fun start !! ");
//     return;
//     console.log("fun end !! ");
// }

// print();
// print();
// print();
// print();

// function name(msg) {
//     console.log(`${msg} is here !!`);
// }

// name("roshan kalmathe making something like !!");

// function sum(a, b ) {
//     return a+b; 
// }

// console.log(sum(101,2));



// // ****    Arrow function    ****/
// let arrowSum = (a, b) => {
//     return a + b;
// }
// console.log(arrowSum(10, 13));

// let hello = () => {
//     console.log('hello roshan, How are you !!');
// }

// hello();
// hello();


// let vowels = (value) => {
//     let count = 0;
//     for (const char of value) {
//         if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// let name = 'aeiouttttt';
// console.log(vowels(name));

// let arr = [2, 3, 56, 41, 23, 71];

// arr.forEach(function print(val) {
//     console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val);
// });

let ar = [2,3,4,5,6];
ar.forEach((value , index)=>{
    console.log(`${value},square => ${value**2} ,index => ${index}`);
})

