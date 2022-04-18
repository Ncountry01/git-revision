/** Access multi Dimensional Array with index*/

var myArray= [[1, 2, 3,], [4, 5, 6], [7, 8, 9], [10, 11, 12], 13, 14] ; 
//How to access data 8 from myArray
console.log(myArray[2][1]) //8

/**Manipulate Arrays with push() {Append data at the end in array} */

 const arr1 = [1, 2, 3];
 let append= arr1.push(4);
 console.log(arr1)  //[ 1, 2, 3, 4 ]

 const myArray1 = ["happy", "joy"];
 let append1 = myArray1.push(["pleasure", 5])
 console.log(myArray1) //[ 'happy', 'joy', [ 'pleasure', 5 ] ]


 /**Manipulate Array with pop() {remove last data from array} */

 const threeArr= [1, 4, 6];
 const oneDown = threeArr.pop();
 console.log(oneDown) //6
 console.log(threeArr) //[1, 4]


 /**Manipulate Arrays with shift() {remove first data from Array} */

 const ourArray = ["stimpson", "J", ["cat"]];
 const removedfromOurArray = ourArray.shift();
 console.log(removedfromOurArray)  //stimpson

 

 /**Manipulate Arrays with unshift() {append data at begining}*/

 const thisArray = ["surya", "J", "cat"];
 const removefirst = thisArray.shift();
 const addfirst = thisArray.unshift(["Happy"])

 console.log(removefirst)//Stimpson
 console.log(thisArray)  //[ [ 'Happy' ], 'J', 'cat' ]



 /**Shopping list */

 const myList = [["Chocolate bar", 15], ["diaryMilk", 20], ["ParleJi", 25] ]
 console.log(myList)  //[ [ 'Chocolate bar', 15 ], [ 'diaryMilk', 20 ], [ 'ParleJi', 25 ] ]

