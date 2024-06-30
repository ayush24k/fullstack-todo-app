import { useState } from "react";


export default function CreateTodo () {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    function addTodo () {
        fetch("http://localhost:3001/todo", {
            method: "Post",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then( async (res) => {
                const data = await res.json();
                alert("todo added")
            })
    }

    return (
        <div>
            <input type="text" placeholder="title" onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
            }}></input>

            <input type="text" placeholder="description" onChange={(e) => {
                const value = e.target.value;
                setDescription(value);
            }}></input>

            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}