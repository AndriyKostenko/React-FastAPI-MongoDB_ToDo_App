import TodoItem from "./Todo";



function TodoView(props) {
    const handleDelete = (title) => {
        props.setTodoList(prevTodoList => prevTodoList.filter(todo => todo.title !== title))
    }
    return (
        <div>
            <ul>
                {props.todoList.map(todo => 
                    <TodoItem key={todo.title} todo={todo} onDelete={handleDelete}/>
                )}
            </ul>
        </div>
    )
}

export default TodoView;