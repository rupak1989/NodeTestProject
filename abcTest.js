/*function Car() { 
   this.make = "Ford" 
} 
var obj = new Car() 
obj.model = "F123" 
console.log(obj.make) 
console.log(obj.model)*/

// var roles = { 
//    type: "Admin", // Default value of properties 
//    displayType : function() {  
//       // Method which will display type of role 
//       console.log(this.type); 
//    } 
// }  
// // Create new role type called super_role 
// var super_role = Object.create(roles); 
// super_role.displayType(); // Output:Admin  

// // Create new role type called Guest 
// var guest_role = Object.create(roles); 
// guest_role.type = "Guest"; 
// guest_role.displayType(); // Output:Guest

// "use strict" 
// var det = { name:"Tom", ID:"E1001" }; 
// var copy = Object.assign({}, det); 
// console.log(copy);  
// for (let val in copy) { 
//    console.log(copy[val]) 
// }

/*//Object De-structuring
var emp = { name: 'John', Id: 3 } 
var {name, Id} = emp 
console.log(name) 
console.log(Id)*/

//simple array
/*var alphas; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
alphas.shift(alphas[3]);
console.log(alphas);
console.log(alphas[1]);*/


/*

var numbers = [1, 2, 3]; 
var oddNumber = numbers.find((x) => x % 2 == 1); 
console.log(oddNumber); // 1
*/
/*var numbers = [1, 2, 3]; 
var oddNumber = numbers.filter((x) => x % 2 == 1); 
console.log(oddNumber); // 1*/

/*var numbers = [1, 2, 3]; 
var oddNumber = numbers.findIndex((x) => x % 2 == 1); 
console.log(oddNumber); // 1*/

/*"use strict" 
for (let i of Array.from('hello')) { 
   console.log(i) 
}*/

/*var map = new Map(); 
map.set('name','Tutorial Point'); 
map.get('name'); // Tutorial point
console.log(map.get('name'))*/

/*var roles = new Map(); 
roles.set('r1', 'User') 
.set('r2', 'Guest') 
.set('r3', 'Admin'); 
console.log(roles.has('r1'));
console.log(roles.get('r1'));*/
/*
'use strict' 
class StaticMem { 
   static disp() { 
      console.log("Static Function called") 
   } 
} 
StaticMem.disp() //invoke the static metho*/

//user promises

/*function getSum(n1, n2) {   
   var isAnyNegative = function() {   
      return n1 < 0 || n2 < 0;   
   }   
   var promise = new Promise(function(resolve, reject) {   
      if (isAnyNegative()) {   
         reject(Error("Negatives not supported"));   
      }   
      resolve(n1 + n2)
   });   
   return promise;   
}

getSum(5, 6)   
.then(function (result) {   
   console.log(result);   
},   
function (error) {   
   console.log(error);   
});*/

function getSum(n1, n2) {   
      var isAnyNegative = function() {   
         return n1 < 0 || n2 < 0;   
      }   
      var promise = new Promise(function(resolve, reject) {   
         if (isAnyNegative()) {   
            reject(Error("Negatives not supported"));   
         }   
         resolve(n1 + n2);   
      });   
      return promise;   
   } 


   getSum(5, 6)   
   .then(function(result) {   
      console.log(result);   
      return getSum(10, 20); 
      //this returns another Promise   
   },   
   function(error) {   
      console.log(error);   
   })
   .then(function(result) {   
      console.log(result);   
      return getSum(30, 40); 
      //this returns another Promise   
   }, 
   function(error) {   
      console.log(error);   
   })   
   .then(function(result) {   
      console.log(result);   
   }, 
   function(error) {         
      console.log(error);   
   });   
   console.log("End of script ");   