let word2 : string = "안녕";
let num2 : number = 1;
let isTrue2 : boolean = true;
let stringArray2:string[] = ["1","2","3"];

interface Person {
    name : string
    age2 : number
}

let myPerson2:any = {
    name : "green",
    age : 40,
}

function printName(person:Person):void {
    console.log(person.name)
}

function getText<T>(text:T) : T {
    return text
}
console.log(getText<string>("hi"))
console.log(getText<number>(10))
