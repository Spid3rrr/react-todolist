
export default function SingleTask(props){
    return <div className="bg-white block text-black m-4 pt-10 w-56 h-56 flex flex-col justify-around">
        <div className="flex flex-col p-5">
        <div>{props.item.done?<s>{props.item.text}</s>:props.item.text}</div>
        <div>{props.item.date.getDate()}/{props.item.date.getMonth()+1}/{props.item.date.getYear()}</div>
        </div>
        
        <div id="utilities">
        <div id="done">
            <label>done : </label>
            <input type="checkbox" className="checked:bg-blue-500" onChange={() => props.toggleTaskDone(props.item.id)} />
        </div>
        <div>
        <button className="rounded-full text-white bg-red-400 hover:bg-red-700 w-24" onClick={()=>props.deleteTask(props.item.id)}>Delete</button>
        </div>
        </div>
    </div>
}