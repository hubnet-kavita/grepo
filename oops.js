class phone
{
    constructor(dis,ram,memory,camera,battery){
        this.display=dis;
        this.ram=ram;
        this.memory=memory;
        this.camera=camera;
        this.battery=battery;
        document.write("one object of phone has been created "+"<br>");

    }
    getconfiguration() {
        document.write(this.display+"<br>");
        document.write(this.ram+"<br>");
        document.write(this.memory+"<br>");
        document.write(this.camera+"<br>");
        document.write(this.battery+"<br>");
        
    }

}
let p1=new phone("amlod","4gb","128gb","32mp","4000");
p1.getconfiguration()

