import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent)
        setNewTaskContent("")
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__paragraph "
                placeholder="Co jest do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__addButton form__addButton--done">Dodaj Zadanie</button>
        </form>
    )
};
export default Form;