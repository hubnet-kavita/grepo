// function ch(){
//     var ch=confirm("would you like to chnage heading: ");
//     if(ch==true){
//         var nh=prompt("enter new heading : ");
//         var oh=document.getElementById("h1");
//         oh.innerHTML=nh;
//     }
//     else{
//         document.write("no chnages");
//     }
// }

    let result = document.getElementById("b1");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function chh() {
            changeColor('yellow');
            result.innerHTML = "Background Color changed";
        }     
