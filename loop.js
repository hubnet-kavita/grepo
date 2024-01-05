var programming=["pyhton,php,c,c++,java,java script"];
document.write(programming);

var course={
    "python":15000,
    "sql":1000,
    "php":12000,
    "webd":25000,
    "cloud":40000,
};

for (key in course)
{
    document.write(key+"\t="+"\t");
    document.write(course[key]+"<br>");

}
var num=prompt("enter a number");
document.write("<center><table border=2 height=200px width=1000px>");
for( row = 1; row <=10; row++) { 
    document.write("<tr>"); 
    for (column=1;column<=num;column++){
        document.write("<th>"); 
        document.write(row*column +"\t");
        document.write("</th>"); 
    }
    document.write("</tr>"); 
document.write("<br>");
}
document.write("</table></center>");
