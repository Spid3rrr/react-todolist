import { useState } from "react";

export default function AddTask(props){

    const [message, setMessage] = useState('');
    const handleChange = event => {
    setMessage(event.target.value);
    };
    const handleAdd = () => {
        if(message==='') return;
        props.addTask(message);
        setMessage('');
    }

    return <div className="p-10">
        <form>
            <label>Add a new task : </label>
            <input className="text-black m-4" type="text" id="taskText" onChange={handleChange} value={message}/>
            <button type="button" className="rounded-full text-white bg-blue-400 hover:bg-blue-700 w-24 m-4" onClick={handleAdd}>Add</button>
        </form>
    </div>
}