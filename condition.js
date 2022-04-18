/**comparing different value */

function compare(a, b) {
 
    if (a === b) {
        console.log(" both are equal")
    }
    else{
        console.log("Not Equal")
    }
    console.log(typeof(a, b))
}

compare(5, "5")



/**Comparison with unequality operator */

function NotEquality(a) {
    if(a == "a"){
        //return "String equal"
        console.log(true)
    } else {
    if(a != "a") {
        //return "String Not Equal";
    console.log("string Not Equal");
    }
    else {
        //return "String Equal";
        console.log("String Equal");
    }
}
}

NotEquality(8)



/**Strict Inequality */

function StrictIneqality(b, c) {
   
    if(b !== c) {
        //return "Both are not equal"
     
        console.log("Both Are Not Equal")
        
    }
    else{
        if(b !== 'c') {
            //return "Both are not equal"
            console.log("Both are not equal")

        }else {
            //return "Both are equal"
            console.log("Both are Equal")
        }
    }
    }
StrictIneqality(5, 5)




/**Greater Than Operator */

function GreaterThanOperator(a, b) {
  
    if(a > b) {
        //return "a is greater Than b"
        console.log("a is Greater than b")
    }else{
        //return "a is not Grater Than b"
        console.log("a is Not greater than b")
    }
}

GreaterThanOperator(10, 8)



/**Comparison with Graeter Than equal to operator */

function GraeterthanEqual(a, b) {
 
    if(a >= b) {
        //return "a is Greater than b"
        console.log("a is greater than b")
    }else if(a == b ) {
   //return "a is eqal to b";
   console.log("a is equal to b")
    }else{
        //return "a is not greater than b"
        console.log("a is not greater than b")
    }
}
GraeterthanEqual(23, '23')



/**Less than Operator */

function LessThanOperator(p, q) {
    if(p <= q) {
        //return "p is less than q"
        console.log("p is less than q")
    }else{
        //return "p is not less than q"
        console.log("p is not less than q")
    }
}

LessThanOperator(12, 23);



/**Comparison Logical AND Operator */

function AndLogical(num) {
 
if(num >= 1 && num <= 13) {
    //return true
    console.log(true)
}else {
    //return false
    console.log(false)
}

}
AndLogical(12)



/**Comparison OR operator  */

function Oroperator(num) {
    if(num >= 1 || num <= 12) {
        //return true
        console.log(true)
    }else {
        //return false
        console.log(false)
    }
}
Oroperator(13)



/**Interoducing Else If Statement */
function ElseIfcondition (n) {
    if(n > 5) {
        //return "Greater Than 5"
        console.log("Greater Than 5")
    }else if (n < 5) {
        //return "Smaller than 5"
        console.log("Smaller  than 5")
    }else{
        //return "Both are equal"
    }
}

ElseIfcondition(34);


/**Golf Code */


function GolfCode(strokes, par) {

    if(strokes && par ==1){
        //return "Hole-in-one!"
        console.log("Hole-in-one!")
    }else if(strokes <=par - 2) {
        //return "Eagle";
        console.log("Eagle");
    }else if(strokes == par - 1) {
        //return "Bridie"
        console.log("Bridie")
    }else if(strokes / par === 1) {
       // return "Par"
       console.log("Par")
    }else if(strokes == par + 1){
        //return "Bogey"
        console.log("Bogey")
    }else if(strokes == par + 2) {
        //return "Double Bogey"
        console.log("Double Bogey")

    }else if(strokes >= par + 3) {
        //return "Go Home"
        console.log("Go Home")
    }else{
        return true
    }
} 

GolfCode(7, 4)



/** Selecting Many Options with Switch Statements*/
function switchStatement (lowercaseLetter) {
switch(lowercaseLetter) {
    case "a" :
        console.log("A")
        break;
        case "b" : 
        console.log("B")
        break;
}
}
switchStatement("a")


/**Switch statement which tests val and sets answer */

function Answer(val) {
switch (val){
    case 1:
        console.log("alpha")
    break;
    case 2: 
     console.log("beta")
     break; 
     
     case 3:
        console.log("gamma")
    break;
    case 4: 
     console.log("delta")
     
}
}
Answer(4)




/**Adding default statement in switch case */

function Alphabet(lowercase) {

switch (lowercase) {
    case "a":
      console.log("apple")  
     break;
     case "b":
        console.log("bird")  
       break;
       case "c":
        console.log("cat")  
       break;
       default : 
       console.log("stuff")
       break;
}

}
Alphabet("d")




/**Identical option in Switch Statements */

var result = " 2";
function Identical(val) {
switch(val) {
    case 1:
    case 2:
    case 3:
    //result = "1, 2, or 3";
    console.log("1, 2 or 3")
    break;
    case 4:
     //result = "4 alone"               
    console.log("4 alone")
    }
}
Identical(2)



function sequentialSizes(val) {

    switch(val) {
        case 1:
        case 2:
        case 3:
        //return "Low"
        console.log("Low")
        break;

        case 4:
            case 5:
            case 6:
            //return "Mid"
            console.log("Mid")
            break;

            case 7:
                case 8:
                case 9:
                //return "High"
                console.log("High")                    
    }

}

sequentialSizes(4)
    
    /**Returning Boolean values */

function isEqual(a, b) {
    if(a ===b ) {
        //return true
        console.log(true)
    }else {
        //return false
        console.log(false)
    }
}

isEqual(4, 5)


/**Return Early Pattern for Functions */

function myFun() {
    console.log("Hello");
    return "world"
    console.log("byebye")
}
myFun()



function abTest (a, b) {
    var result;
    var sum;
    if( a === b === 0){
        //return 0;
        console.log(0)
        
    }else{
        sum = a + b;
        result = sum * 2;
         if( a || b > 0 && sum == 0 ) {
             //return undefined;
             console.log(undefined)
         }else{
             //return result 
             console.log(result)
         }
    }
}
    

abTest(0, 0)