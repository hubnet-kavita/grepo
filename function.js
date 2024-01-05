function add()//take nothing and return nothing
{
   var num1=parseInt(prompt("enter a  first number : "));
   var num2=parseInt(prompt("enter a  first number : "));
   document.write(num1+num2);
}
add();

function add(x,y) //take somthing and return nothin
{
    document.write(x+y);
}
add(5,6)

function add(x,y) //take something return something
{
    return x+y;
}
document.write(add(55,55))

function add(x,y) //take nothing return something
{
    var num1=parseInt(prompt("enter a  first number : "));
   var num2=parseInt(prompt("enter a  first number : "));
    return num1+num2;
}
document.write(add(55,55))

var fun1=function add() //function as a variable
{
    var num1=parseInt(prompt("enter a  first number : "));
   var num2=parseInt(prompt("enter a  first number : "));
    return num1+num2;
}
document.write(fun1());
