import SingleTask from "./SingleTask";
import AddTask from "./AddTask";

export default function ToDoList(props){
    return <div id="toDoList" className="mt-24">
        <AddTask addTask={props.addTask}/>
        <div id="taskList" className="flex flex-row justify-around flex-wrap">
        {props.list.map(item=><SingleTask item={item} 
        deleteTask={props.deleteTask} 
        toggleTaskDone={props.toggleTaskDone}
        key = {item.id} // added for react warning
        />)}
        </div>
    </div>
}