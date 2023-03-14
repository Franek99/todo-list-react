import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__paragraph "
            placeholder="Co jest do zrobienia"
            autofocus
        />
        <button className="form__addButton form__addButton--done">Dodaj Zadanie</button>
    </form>
);
export default Form;