// Datatypes:
// Primitives
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null

// Non primitives
// 1. Object
// 2. Array
// 3. Function

// const name = "Brijesh"
// const age = 25
// const isMarried = true
// const undefinedValue = undefined
// const nullValue = null
// const weightInPetaTonnes= 34n
// const id = Symbol("ID")

// console.log(name, typeof name)
// console.log(age, typeof age)
// console.log(isMarried, typeof isMarried)
// console.log(undefinedValue, typeof undefinedValue)
// console.log(nullValue, typeof nullValue)
// console.log(weightInPet
// aTonnes, typeof weightInPetaTonnes)
// console.log(id, typeof id)

//Non primitives
// const person = { name: "Anand", age: 99, isMarried: true }
// const arr = [1,2,3,4,5]
// const func = function() { console.log("Hello World") }

// console.log(typeof person)
// console.log(typeof arr)
// console.log(typeof func)
// In JS, all Non primitives are of type object. But, Array and Function are special types of objects. 
// But functions are a special type of object that can be called/invoked. Datatype will show up as function.
//Arrays: they are not callable and no special datatype assigned  

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const method = {a (){return "RAVA DOSA" }}
console.log(method.a()) // RAVA DOSA
console.log(typeof method.a)

const Obj2 = { age:25 }
console.log(typeof Obj2.age)

const Obj3 = { arr:[1,2,4] }
console.log(typeof Obj3.arr)