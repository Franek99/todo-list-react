import "./style.css"

const Buttons = (props) => {

    if (props.tasks.length === 0) {
        return null;
    }
    return (
        <div className="section__HeaderAndButtons">
            <button type="submit" className="section__button ">
                {props.hideDoneTask ? "Pokaż" : "Ukryj"} Zakończone </button>
            <button type="submit" className="section__button "
                disabled={props.tasks.every(({ done })=>done)}
            > Ukończ Wszystkie </button>
        </div>
    );
}

export default Buttons