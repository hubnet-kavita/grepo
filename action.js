var age=parseInt(prompt("enter your age:"))
var choice=confirm("would you like to perform calculation: ");
if (age>=18 && choice==true)
{
var fn=parseInt(prompt("enter first number:"));
var sn=parseInt(prompt("enter second numaber:"));
var op=prompt("enter operator sign:");
document.write("<center>"+"<b>"+"first num : "+fn+"<br>");
document.write("<center>"+"<b>"+"second num : "+sn+"<br>");
document.write("<center>"+"<b>"+"operator : "+op+"<br>");
if(op=="+")
{
    document.write("<center>"+"<b>"+"addition of two num : "+fn + " and " + sn + " is :"+(fn+sn)+"<br>");  
}
else if(op=="-")
{
    document.write("<center>"+"<b>"+"substraction of two num : "+ fn + " and " + sn + " is :"+ (fn-sn) +"<br>");  
}
else if(op=="*")
{
    document.write("<center>"+"<b>"+"multipication of two num : "+ fn + " and " + sn + " is :"+ (fn*sn) +"<br>");  
}
else if(op=="/")
{
    document.write("<center>"+"<b>"+"division of two num : "+ fn + " and " + sn + " is :"+ (fn/sn) +"<br>");  
}
}
else{
    alert("try next time!!!");
}
