import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button onClick={toggleHideDone}
                type="submit"
                className="buttons__button ">
                {hideDone ? "Pokaż" : "Ukryj"} Zakończone </button>
            <button
                onClick={setAllDone}
                type="submit"
                className="buttons__button "
                disabled={tasks.every(({ done }) => done)}
            > Ukończ Wszystkie </button>
        </div>
    );
}

export default Buttons