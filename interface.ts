export interface myQueue{
    myArr:Array<string>; 
    addTasks(task:string):number; 
    listAllTasks():void; 
    deleteTasks(task:string):number
}