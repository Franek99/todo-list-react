import "./style.css"

const Section = (props) => (
    <section className="section">
        <div className="section__div">
        <h2 className="section__header">{props.title}</h2>
        {props.extraHeaderContent}
        </div>
        {props.body}
    </section>
)

export default Section