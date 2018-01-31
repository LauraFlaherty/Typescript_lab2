/*. In this exercise you are required to create an array, and then create functions to add,
remove and display the items in this array. To complete this exercise you will need to
do the following:*/


//(a) create an array of strings
let myArr:Array<string>=[]; 

//(b) Create an addTask function:
/*i. It receives a string as a parameter called task.
ii. It adds the task to the array.
iii. It prints a message in the console indicating the insertion.
iv. It returns the number of elements in the array after the insertion*/
function addTasks(task:string):number{

    myArr.push(task); 
    console.log("Item added " + task); 
    return myArr.length; 
}
//console.log(addTasks); 

//(c) Create a listAllTasks function:
/*
i. It iterates over all the tasks in the array.
ii. It prints each array item in the console.
 */
function listAllTask(){

    for (let item of myArr)
    {    
        console.log(item)
    }
}
/*(d) Create a deleteTask function:
i. It receives a string as a parameter called task.
ii. It removes that string from the array.
iii. It prints in console a message indicating the deletion.
iv. It returns the number of elements in the array after the deletion */
function deleteTasks(task:string):number{

    let index:number = myArr.indexOf(task);
    if(index>-1)
    {
        myArr.splice(index,1);         
    }
    console.log("Task"+task+ "removed from the list");
    return myArr.length; 
}

//execution
console.log("Number of items:", addTasks('task no 1')); console.log("Number of items:", addTasks('task no 2')); 
listAllTask();
console.log("Number of items:", deleteTasks("task no 2")); 
listAllTask();