import "./style.css"

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="task">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list ${task.done && hideDone ? "list--hidden" : ""}`}>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    type="submit"
                    className=" list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`"list__taskName  ${task.done ? "list__taskName--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    type="submit"
                    className="list__button--remove"
                    onClick={() => removeTask(task.id)}
                >🗑
                </button>
            </li>
        ))}
    </ul >

);

export default List;