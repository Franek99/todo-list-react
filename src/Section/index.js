import "./style.css"

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
)

export default Section