import { useState } from "react"

export default function Task() {

    const [ task, setTask ] = useState("")
    const [ todos, setTodos ] = useState([])

    const handleClick = (e) => {
        // console.log('Working!!');
        console.log(task);

        
        setTask("")        
    }

    return (
        <>
            <input type="text" value={task} name='task' placeholder="Enter todo" onChange={(e)=>setTask(e.target.value)} />
            <button type="submit" onClick={handleClick}>Add</button>

        </>
    )
};
