import "./style.css"

const Buttons = ({ tasks, hideDoneTask }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button type="submit" className="buttons__button ">
                {hideDoneTask ? "Pokaż" : "Ukryj"} Zakończone </button>
            <button type="submit" className="buttons__button "
                disabled={tasks.every(({ done }) => done)}
            > Ukończ Wszystkie </button>
        </div>
    );
}

export default Buttons