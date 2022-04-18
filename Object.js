/**Build a javascript Object */

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails":1,
    "enemies": ["Water", "Dogs"]
}

console.log(cat) 


const anotherObject ={
    make:"Ford",
    5:"Five",
    "model":"focus"
}

console.log(anotherObject)


/**Accessing Object properties with dot notations */

const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

console.log(prop1val)
console.log(prop2val)


/**Accessing properties with bracket notations */

const myObj1 =  {
    "Space Name": "Krik",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
} 

const val1 = myObj1["Space Name"];
const val2 = myObj1["More Space"];
const val3 = myObj1["NoSpace"];

console.log(val1)
console.log(val2)
console.log(val3)


/**access property using variable */
const Dogs = { 
    Fido: "Mutt", Hunter: "Doberman", Snoopie:"Beagle"
};

const myDog = "Hunter";
const myBreed = Dogs[myDog]
console.log(myBreed) //Doberman



const someObj = {
    propName : "John"
};
function propPrefix(str) {
    const s = "prop";
    return s + str;

}
const someProp = propPrefix("Name");
console.log(someObj[someProp])

/**  */

const playerObj = { 
    propNumber: 16
};
function player(num){
    const val = 'prop'
    return val + num
}

const playerProp = player("Number")
console.log(playerObj[playerProp]) 



/**Update Object Properties */

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
}

console.log(ourDog) //{ name: 'Camper', legs: 4, tails: 1, friends: [ 'everything' ] }
ourDog.name = "Happy camper"
console.log(ourDog) //{ name: 'Happy camper', legs: 4, tails: 1, friends: [ 'everything' ] }
/**Add New Properties to Javascript objects */

ourDog.bark = "bow-bow";

console.log(ourDog) //{ name: 'Happy camper', legs: 4, tails: 1, friends: [ 'everything' ],bark: 'bow-bow' }


/**Delete Properties from Objects */

delete  ourDog.bark;

console.log(ourDog) //{ name: 'Happy camper', legs: 4, tails: 1, friends: [ 'everything' ] }



/**Using Objects for Lookups */

const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4: "W",
    24:"C",
    25: "B",
    26:"A"

};

//alpha(2);
//alpha(24);

var value = 2;
//alpha(value);



const phoneticLookup = {
    Adams: "alpha",
    Boston: "bravo",
    Chicago:"chalie",
    Denver: "delta",
    Easy: "echo",
    Frank: "foxtrot",
}
console.log(phoneticLookup)




/**Testing Objects  Properties */

const myObj2 = {

    top:"hat",
    bottom:"pants"
};

const data1 = myObj2.hasOwnProperty("top");
const data2 = myObj2.hasOwnProperty("middle");

console.log(data1) // true
console.log(data2) //false




const checkObj =
{
    gift: "pony",
    pet:"kitten", 
    bed:"sleigh"
}
checkObj.city= "Seattle";

if(checkObj.hasOwnProperty('gift')) {
    console.log(checkObj.gift)
 if(checkObj.hasOwnProperty('pet')){
    console.log(checkObj.pet)
if(checkObj.hasOwnProperty('city')){
    console.log(checkObj.city)
}
}
}else{
    console.log("Not found")
}




/**Manipulating Complex Objects */

const ourMusic = [

    {
        "artist": "Draft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold":true
    }
];

console.log(ourMusic)



/**Accessing Nested Objects */

const ourStorage =  {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": " a file",
            "folder2": " secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage)

const item = ourStorage.cabinet["top drawer"].folder2;
const item2 = ourStorage.desk.drawer;

console.log(item) // secrets
console.log(item2) //stapler




/**Accessing Nested Array */

const ourPets = [
    {
        animalType: "cat", 
        names: [
            "Meowrer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType : "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

const arr = ourPets[0].names[1];
const arr1 = ourPets[1].names[0];

console.log(arr)
console.log(arr1)



/**Records Collections */



function updateRecords(id) {
 
    const records = {
        id: i,
        recordCollection:{
        value: [5439, 2548, 1245, 2468],
        tracks:["Take a chance on me", 'Addicted to Love', 1999],
        artist:"ABBA",
        },
        albumTitle:"Riptide"
        
    }

}
//updateRecords()



/**While Loops */

let ourArray = [] ;
let i = 0;
while(i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);


const myArray = [];

let k= 0;
while( k < 6) {
    myArray.unshift(k);
    k++;
}
console.log(myArray)



let loopArray = [];
for (let i = 0; i < 5; i++) {
    loopArray.push(i)
}
console.log(loopArray);



/**Odd Numbers with a for Loop */

let loopArray1 = [];
for (let i=0; i < 10; i +=2) {
    loopArray1.push(i)
}
console.log(loopArray1)


let oddArray = [];

for(let a= 1; a <= 9; a+=2) {
    oddArray.unshift(a)
}
console.log(oddArray)



/**Iterate through an array with a for Loop */

let itrArr = [10, 9, 8, 7, 6];
for(let i= 0; i <itrArr.length; i++){
    if(itrArr[i] > 7){
        console.log("It is very beautiful Day")
    }else if(itrArr[i] == 6){
        console.log("Welcome to amazing MultiVerse")
    }

    console.log(itrArr[i])
}  
 

/**nesting for Loops */

var nestArr = [[1, 2], [3, 4], [5, 6]];

for (let p = 0; p< nestArr.length; p++) {
    for (let q = 0; q< nestArr[p].length; q++){
        console.log(arr[p][q])
    }
}

var Arrays1 = [[1, 2] ,[3, 4]];
let product;
for(let x= 0; x < Arrays1.length; x++){
    for(let y=0; y< Arrays1[x].length; y++){
        product = Arrays1[[x] * [y]]
        console.log(product)
    }
}

/**Recursin */

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product += arr[i];
    }
    //return product
    console.log(product)
}
multiply(arr , 4)



function multiply(arr4, n) {
    var product = 1 ;
    for(var i = 0; i < n; i++) {
        product += arr4[i]
    }
    //return product
    console.log(product)
}
multiply(arr, 4)


function Multiply (arr5, n)  {
    if(n <= 0) {
        return 1;
    }else{
        //return Multiply(arr5, n-1) + arr[n-1]
        console.log(Multiply(arr5, n-1) + arr[n-1])
    }
}

function randomFraction(n) {
    const val = Math.floor(Math.random()*n);
    if(val === 0) {
        console.log(null)
    }else{
    console.log(val)
}
}
randomFraction(6)



/**Random whole Number within a range */
function randomNum(max, min){
const value1 = Math.floor(Math.random() *(max -min + 1)) + min
console.log(value1)
}
randomNum(8, 4)



/**Conditional Ternary Operator */

function findGreater(a, b) {
    if(a > b) {
        console.log("a is greater")
    }else{
        console.log("b is greater")
    }
}
findGreater(23, 34)


function findGreater1 (a, b) {
    //return a > b ? 'a is Greater' : "b is Greater";
  console.log(a > b ? 'a is Greater' : "b is Greater");
}
findGreater1(32, 12)



/**Ternary Operators */

function findGreaterOrEqual (a, b) {
    if(a == b){
        console.log("a is equal to b")
    }else if(a > b) {
        console.log("a is greater ")
    }else {
        console.log("b is Greater")
    }
}
findGreaterOrEqual(12, 33)


function findGreaterOrequal(p, q) {
    console.log((p === q) ?  "p and q are equal" : (p > q) ? " p is Greater" : "q is Greater");
}
findGreaterOrequal(20, 22)



/**Recursion to create countDown */

function countup(n) {
    if(n < 1) {
       return [];
        // console.log([]);
    }else{
        const countArray = countup(n - 1);
        countArray.push(n)
        return countArray;
        //console.log(countArray)
    }
}

console.log(countup(5));



function countDown(n) {
    if(n < 1) {
        return []
    }else{
        const countdownArray = countDown(n-1)
        countdownArray.unshift(n)
        return countdownArray;
    }
}

console.log(countDown(10))



function rangeOrder(num) {
    if (num < 1) {
        return [];
    }else{
        const rangeArray = rangeOrder(num - 1)
        rangeArray.push(num)
        if(1 <= rangeArray <= 5 ){
            return [rangeArray];
        }else if(rangeArray === 4){
          return [rangeArray];
        
        }else {
            return [rangeArray];
        }
    }
}
console.log(rangeOrder(10))



/**Use a recursion to create countDown */

function  countUp(n) {
    if(n < 1) {
        return [];
    }else {
        const countarray = countUp(n- 1);
        countarray.push(n);
        return countarray
    }
}

console.log(countUp(10))