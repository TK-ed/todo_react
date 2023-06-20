import React from "react";

export default function Todos(props) {
    console.log(props.task);
    return(
        <div>
            <table>
                <tr>
                    <td>{props.number}</td>
                    <td>{props.task}</td>
                </tr>
            </table>
        </div>
    )
};
