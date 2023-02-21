//ac - clear display
//back - remove last character
// () - add brackets ( , )
// + ,-, * ,/
// =  evaluate the expression
let bracketFlag = 0;
let display = document.querySelector('.display');
display.value=0;
const addToDisplay = (myVal)=>{

    if(display.value=="0")
    {
        display.value="";
    }
    if(myVal == "AC"){
        display.value = "0";
    }
    else if(myVal == "Back"){
    display.value = display.value.slice(0,-1);
    }
    else if(myVal == "()"){
        //first time pressed - opening bracket
        //second time pressed - closing bracket
        //third time pressed - opening bracket

        if(bracketFlag ==0)
        {
            display.value += "(";
            bracketFlag=1;
        }
        else if(bracketFlag == 1)
        {
            display.value += ")";
            bracketFlag=0;

        }
     }
    else if(myVal =="="){
        //evaluate the expression

        try{
display.value = eval(display.value);
        }
        catch{
            display.value = "Invalid format";
        }
     }

    else{
        // 0,1,2,3,4,5,6,7,8,9,*,-,/,+,.,%
        display.value = display.value + myVal;
    }
}