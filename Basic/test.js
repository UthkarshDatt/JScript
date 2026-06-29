// console.log("Hello world")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let accountName="MINDY"
const UIN = 34333
let experienceInYears = 3.3
// console.table([accountName, UIN, experienceInYears])

// //~~~~~~~~~~~~~~~~~~~~~~~~
// console.log(3+3); console.log(6+3); 

// "use strict"; //Strict mode takes code as per the latest ver of JS
// //alert(3+3) in Broswer




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let Weight= "9i" //0 /12 / NaN / null / undefined /true / false

// console.log("The value in Weight is: " + Weight)
// console.log("The type of Weight is: " + typeof Weight)

let valueInWeight = Number(Weight)

// console.log("The value in valueInWeight is: " + valueInWeight)
// console.log("The type of valueInWeight is: " + typeof valueInWeight)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let lastActivity = 3
let lastActivityInBool = Boolean(lastActivity)
// console.log("The value in lastActivityInBool is: " + lastActivityInBool)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log("2"+1)
// console.log(typeof ("2"+1))

// console.log(2+1)
// console.log(typeof (2+1))

// console.log(3+"4")
// console.log(typeof (3+"4"))

// console.log("2"+"1")
// console.log(typeof ("2"+"1"))


// console.log("2">1) //true   
// console.log("2"<1) //false
// console.log("a00002"<1) //false
// console.log("a00002">1) //false

// console.log(null>1) //false
// console.log(null<1) //true
// console.log(null==1) //false
// console.log(null==0) //false
// console.log(null>=0) //true
// console.log(null<=0) //true
//equality operator works differently than relational operators. 
// Null is converted to 0 for relational operators but not for equality operator. 
// Hence the difference in results.

// console.log(undefined>1) //false
// console.log(undefined<1) //false
// console.log(undefined==1) //false
// console.log(undefined==0) //false
// console.log(undefined>=0) //false
// console.log(undefined<=0) //false
//undefined is not converted to 0 for relational operators or equality operator. 
// Hence the difference in results.

// console.log(NaN>1) //false
// console.log(NaN<1) //false
// console.log(NaN==1) //false
// console.log(NaN==0) //false
// console.log(NaN>=0) //false
// console.log(NaN<=0) //false
//NaN is not converted to 0 for relational operators or equality operator. 
// Hence the difference in results.


console.log("2"==2) //true
console.log("3"==2) //false
console.log("2"===2) //false
console.log(2===2) //true // === is strict equality operator. It checks for both value and type.


