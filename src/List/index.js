import "./style.css"

const List = ({ tasks, hideDoneTask }) => (
    <ul className="task">
        {tasks.map(task => (
            <li className={`list ${task.done && hideDoneTask ? "list--hidden" : ""}`}>
                <button type="submit" className=" list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`"list__taskName  ${task.done ? "list__taskName--done" : ""}`}>
                    {task.content}
                </span>
                <button type="submit" className="list__button--remove">🗑</button>
            </li>
        ))}
    </ul >

);

export default List;