//encapsulation
class computer//define a class to impliment emcapsulation
{
    //attribute[static(at once),instance(object)]
        price=undefined;
        model=undefined;//instance member variable(object)
        static company="hp";//static member variable(class)

    //function[static,instance,constructor:automatically call,self called(implicitlly call)]
    //constructor doesn't return any value
    constructor()//constructor
    {
        //this:coulor object
        this.model=prompt("enter model of computer : ");
        this.price=parseInt(prompt("enter price of product : "));
        this.amount=this.price*18/100+this.price;

    }
    buy()//instance function
    {
        document.write("model = "+ this.model+"<br>");
        document.write("price = "+ this.price+"<br>");
        document.write("amount = "+ this.amount+"<br>");
    }

}
class laptop extends computer //laptop is chlid of computer
{
    constructor(ram,cpu,ssd,display)
    {
        super();
        this.ram=ram;
        this.cpu=cpu;
        this.ssd=ssd;
        this.display=display;

    }
    getconfiguration()
    {
        this.buy();
        document.write("ram = "+ this.ram+"<br>");
        document.write("cpu = "+ this.cpu+"<br>");
        document.write("ssd = "+ this.ssd+"<br>");
        document.write("display = "+ this.display+"<br>");
    }

}
let c1=new computer();
let c2=new laptop("8gb","i5","500gb","14 inch");
c1.buy();
c2.getconfiguration();
