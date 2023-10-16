function sayHello()
{
    alert("Hello");
}

function greet(name) {


    for (let i = 0; i < 3; i++) {
        alert("Hello, " + name + "!");
    //    console.log(i);
    }
    
}



function greetonCondition(name) {
   var number= prompt("What is your number?");
    //var number=1;
    if(number==1)
    {
        alert("I am 1 only");

    }else
    {
        alert("Say " + number);
    }



/*
    if(number==2)
    {
        alert("Say 2");
        
    }
*/
    

}


function SumOfTwoNumber()
{
    let result = document.getElementById("result");

    var a= parseInt(prompt("What is your First number?"));
    var b= parseInt(prompt("What is your second number?"));
    
    //var a= prompt("What is your First number?");

    //var b= prompt("What is your second number?");
    
    
    //a=4;
   // b=3;
   // var c = parseInt(a)+parseInt(b);
  //  alert("Sum of your numbers is : " );
   //alert(a+b);
   result.innerHTML = a+b;

}

//alert(greet("Alice"));

function ChangeHeading(){
// Access the element with id="heading"
let heading = document.getElementById("heading");

// Modify its content
heading.innerHTML = "Your Heading Was Changed";
}


function ChangeColorofP()
{
    let myP=document.getElementById("firstP");
    //alert(myP);

    let elements = document.getElementsByTagName("p");  // selects all <p> elements
alert(elements); // Need to work on this. 
//myP.style.color="red";

    elements.style.color = "blue";
//elements.style.fontSize = "20px";
}



function ChangeColorofAllPTags()
{
    let elements = document.getElementsByTagName("p");
// First Way
/*
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
}

*/

// Second Way

Array.from(elements).forEach(element => {
    element.style.color = "blue";
});

// Third Way
/*
for (let element of elements) {
    element.style.color = "red";
}
*/



}
