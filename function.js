 /**Reusable Javascript with functions */

 function functionName() {
     console.log("Hello World") // this run during function calling 
 }
 functionName() // function Call


 function reusableFunction() {
     console.log("welcome to dev world")
 }

 reusableFunction()


 /**Passing Values to Functions with Arguments */

 function paramFun (param1, param2) {
     console.log(param1, param2)  //Hello World
 } 

 paramFun('Hello', 'World')



 function addValues (a, b) {
     console.log(a+b)  //25
 }
 addValues(12, 13);


 /**Global Scope and Function */

 var globalvar = 10;

 function Globalscope () {
     console.log(globalvar) // nothing printed
 }
 


 var globalvar = 10;

 function Globalscope () {
     console.log(globalvar) //  10
 }
 Globalscope()



 /**Local Scope Of function */


 function myTest() {
     var local = "Footer";
     console.log(local); ///Footer
 }

 myTest();

 //console.log(local) //refferance Error



 /**Global scope Vs Local Scope */

 var GlobalVar = "Hat";

 function myFun() {
     var somevar = "Header"
     console.log(somevar) //Header
     console.log(GlobalVar)//Hat
 }
 myFun()
 console.log(GlobalVar) //Hat



 /**Return a value from a Function with Return */


 function  plusThree(num) {
     console.log(num + 3)  //15
 }
 var answer = plusThree(12);



 /**Undefined value returned from a Function  */

 var sum = 5;
 function addSum(num) {
     sum = sum + num; 
     console.log(sum) //10
    }
    addSum(5)



    /**Assignment with a Returned Value */

    function ourSum (a, b) {
        console.log(a + b) //17
    }
    ourSum(5, 12)

    
/**Stand in Line */
/** 
     var arr = [10, 12, 13, 14, 15];
    function queueFun(arr, item) {
        let remove= arr.shift([0])
        let addqueue= arr.push([-1])
        if(arr[0] == null) {
       return "empty Queue";
      
        }else{
//return remove;
console.log(remove)
        }
        if(addqueue == item){
            return "Overflow"
        }
        else{
            //return addqueue;
            console.log(addqueue)
        }
      
      
      console.log(arr);  
    }
    queueFun(5)
*/


/**Use Conditionnal logic with If statements */


function test(myCondition) {
    if(myCondition){
       // return "It was true";
    console.log("It was True")
    }
    else {
        //return "It was False"
     console.log("It was False")
    }
}
test(true)
test(false)
    


/**Comparision with Equality Operator */

function equalityTest(myVal) {
    if(myVal==10) {
        //retur "Equal"
        console.log("Equal");
    }else 
    {
        // return "Not Equal";
        console.log("not Equal");
    }
}
equalityTest(10)


/**Comparision with Strict Equality Operator */

function StrictequalityTest(myVal) {
    if(myVal==='10') {
        //retur "Equal"
        console.log("Equal");
    }else 
    {
        // return "Not Equal";
        console.log("not Equal");
    }
}
StrictequalityTest(10)

