// VARIABELTYPER

// gamla sättet att skriva en variabel på
var varV = 20

// manipulerbart värde
let varL = 10

// icke manipulerbart värde, konstant värde
const varC = 15

varl = 20


// DATATYPER

// primitiva typer
const bool = true // false
const number = 10.10
const bigIntValue = BigInt(1298371298)
const string =  "    jag är en string    "
const undefinedValue = undefined
const nullValue = null
const symbol = Symbol()

// referenstyper
const object = {
    name: 'jesper',
    age: 34.5
}
const array = []
const set = new Set()
const mapValue = new Map()

console.log(typeof array);
console.log(typeof set)
console.log(typeof mapValue)



let num1 = 10
let num2 = num1
num1 = 20

console.log(num1);
console.log(num2);


// obj2 skapar en pil som pekar mot obj1. så om obj1 ändras, så blir värdet på obj2 också ändrat
const obj1 = {
    value: 1
}

// skapa en kopia av ett objekt med Object.create()
const obj2 = Object.create(obj1)
obj2.value = 2

console.log(obj1);
console.log(obj2);


const arr1 = ['äpple']
const arr2 = arr1
const arr3 = []

// skapa kopia av en array med Array.from()
const copyArr1 = Array.from(arr1)

arr1.push('päron')
arr3.push(...arr1)
arr3.push('banan')

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(copyArr1);


// CONDITIONALS

// OM jag är 20 år eller äldre, då får jag gå in och handla på systembolaget.
// ANNARS OM jag är över 100 år, då får jag inte längre handla på systembolaget för jag är för gammal
// ANNARS är jag för ung

const age = 34

// vi kan använda if/else om det finns några olika fall att checka
if(age >= 20) {
    console.log('vi går in på systembolaget och köper glögg');
}
else if(age >= 100) {
    console.log('jag är för gammal för att handla på systembolaget. men jag får handla alkofri glögg!')
}
else {
    console.log('jag är för ung för att handla på systembolaget. men jag tror att jag får handla alkofri dryck ändå????');
    
}

/* if(password === passwordInDb) {
    //logga in
}
else {
    //fel lösenord. försök igen!
} */


// vi kan använda switch när det finns många olika fall att checka
switch(age) {
    case 1: console.log('oj vad unga vi är!');
       break;
    case 2: console.log('oj vad unga vi är!');
       break;
    case 3: console.log('oj vad unga vi är!');
       break;
    case 4: console.log('oj vad unga vi är!');
       break;
    case 5: console.log('oj vad unga vi är!');
       break;
    case 6: console.log('oj vad unga vi är!');
       break;
    case 7: console.log('oj vad unga vi är!');
       break;
    default: console.log('oj vad gammal! så tokigt det kan bli.');
    
}

// vi kan använda ternary när det bara är ett fall som behöver checkas
1 === 1 ? console.log(1) : null;



// LOOPAR

let counter = 100

while(counter < 100) {
    counter++

    if(counter === 50) {
        console.log("vi har kommit halvvägs!");
    }
}


let counter2 = 1000

do{
    counter2 = counter2 + 1
}while(counter2 < 100)


for(let i = 0 ; i < 100 ; i += 1) {

}


const myObj = {
    name: 'jesper',
    age: 34.5
}

for(let key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}

const myArr = [1, 2, 3, 4, 5, 1, 7, 9, 23, 23, 12]
for(let val of myArr) {
    if(val % 2 === 1) {
        val = val - 1
    }
    
}


myArr.forEach((number) => {
    console.log(number);
    
})


// FUNKTIONER

function myFunction(param1, param2) {
    // en GUARD CLAUSE är lite som en vakt i början av funktionen. den hindrar oss från att köra igenom massa kod i onödan
    if(typeof param1 !== number) return null
    if(typeof param2 !== number) return null

    if(param1 + param2 > 50) {
        return param1 + param2
    }
     
    //massa annan kod här i mitten












    // massa massa massa rader med kod!


    return param1 - param2
}



myFunction(10, 100)

const myList = [
    {num1: 100, num2: 1000}, 
    {num1: 5, num2: 100}, 
    {num1: 1000, num2: 999}
]

for(const item of myList) {
    const returnValue = myFunction(item.num1, item.num2)

    if(!returnValue) {
        //alert('ena inmatningen var inte en siffra. gör om och gör rätt!')
    }
}


const myFunction2 = function() {
    
}

// REKOMMENDERAR ATT ANVÄNDA ARROW FUNCTION NÄR VI GÖR FUNKTIONER
const myArrowFunction = () => {

}

//EXEMPEL
function login(username, password) {
    //OM username stämmer överens med ett användarnamn i databasen. 
    //jämför då om lösenordet stämmer överens med användarens lösenord
}

// DOM - Document Object Model

const myBtn = document.querySelector('button')

const alertUser = (event) => {
    //alert("jag meddelar dig, användaren på sidan!")

    console.log(`x position is: ${event.x}, y position is: ${event.y}`)

    const div = document.createElement('h1')

    div.style.width = '10px'
    div.style.height = '10px'
    div.style.backgroundColor = 'dodgerblue'
    div.style.position = 'absolute'
    div.style.top = event.y + 'px'
    div.style.left = event.x + 'px'

    document.body.appendChild(div)
}

myBtn.addEventListener('click', () => {
    document.removeEventListener('mousemove', alertUser)
})

document.addEventListener('mousemove', alertUser)



console.log(myBtn)