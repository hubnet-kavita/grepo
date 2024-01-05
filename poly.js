//polymor: it allow us to overload and override function as well as operator.
//overloding:declaer same functiuon with different aargument inside a class to perform different operation.
//overriding : delcres same function with same argument inside the child class after inheriting from their parents.
//polymorphism enable to perform different operation by using a single function according to different input
//notes: unlike python js doesn't support function overloading because it follow top down approch thtas why onle last version of the function can be use
//overridind
// class animal
// {
//     speak()
//     {
//         document.write("animal speak"+"<br>");
//     }
// }
// class cat extends animal{
//     speak(sound)
//     {
//         document.write("cat speak like : "+sound+"<br>");
//     }

// }
// let a1=new animal();
// let c1=new cat();
// a1.speak();
// c1.speak("meoww");

//overloading(doesn't support in js)

class claculator
{
    add(a,b)
    {
        this.r=a+b;
        document.write(this.r);
    }
    add(a,b,c)
    {
        this.r=a+b+c;
        document.write(this.r);

    }
}
let calc=new claculator();
calc.add(1,2,3);
