
export default function Todos(props) {
    const todos = props.todos;
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{todo.completed == true ? "completed" : "mark as complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}