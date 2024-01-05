//abstraction: hiding attribute and behavior by making it private or protected so that member of the class can't be assced directly from out of the class
class account
{
    accountno=undefined;
    name=undefined;
    #ifsc="sbin00003027";
    openaccount(n,a)
    {
        this.accountno=a;
        this.name=n;
        document.write(this.accountno+"<br>");
        document.write(this.name+"<br>");
    }

}
let acc1=new account();
acc1.#ifsc="punb0003949";
document.write(acc1.ifsc+"<br>");
acc1.openaccount("10301505503","gappy","sbin00003027");