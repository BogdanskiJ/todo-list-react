import "./style.css"

const Buttons = ({ tasks, hideDoneTask }) => (
   tasks.length > 0 && (
        <div>
            <button className="section__taskListHeaderButton"> {hideDoneTask ? " Pokaż " : " Ukryj "}ukończone </button>
            <button className="section__taskListHeaderButton"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie</button>
        </div>
    )
);
export default Buttons;