import {myQueue} from "./interface"; 

class myClass implements myQueue
{

        //(a) create an array of strings
        myArr:Array<string>=[]; 


    addTasks(task:string):number{

        this.myArr.push(task); 
        console.log("Item added " + task); 
        return this.myArr.length; 
    }

    listAllTasks(){

        for (let item of this.myArr)
        {    
            console.log(item)
        }
    }

    deleteTasks(task:string):number
    {

        let index:number = this.myArr.indexOf(task);
        if(index>-1)
        {
            this.myArr.splice(index,1);         
        }
        console.log("Task "+task+ "removed from the list");
        return this.myArr.length; 
    }
}
let newClass = new myClass(); 
newClass.addTasks("Hello"); 
newClass.listAllTasks(); 
newClass.deleteTasks("Hello"); 