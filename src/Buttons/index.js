import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDoneTask }) => (

    <div>
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="section__taskListHeaderButton"> {hideDoneTask ? " Pokaż " : " Ukryj "}ukończone </button>
                <button className="section__taskListHeaderButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie</button>
            </React.Fragment>
        )}
    </div>


);
export default Buttons;