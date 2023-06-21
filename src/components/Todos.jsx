import React from "react";

export default function Todos({todo, number}) {
    // console.log(props.task);
    return(
        <div>
            <table>
                    {todo.map( (todo) => {
                        return (
                        <tr>    
                            {/* <td>{number}</td> */}
                            <td>{todo}</td>
                        </tr>)
                    })}
            </table>
        </div>
    )
};
