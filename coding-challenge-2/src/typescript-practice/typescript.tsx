let course:string | number = "react"
course = 22

// function types 

function add (a:number, b:number) {
return a + b
}

function print(value:any) {
  console.log(value)
}

// void = null or undefined means it never returns 
// special return type = use conjunctions with functions 
// so if i want to work with the returned value from function, work with undefined 

// generics 

function insertAtBeginning (array:any[], value:any) {
  const newArray = [value, ...array]
  return newArray 
}