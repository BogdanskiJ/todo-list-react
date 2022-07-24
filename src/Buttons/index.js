import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDone }) => (

    <div>
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="section__taskListHeaderButton"> {hideDone ? " Pokaż " : " Ukryj "}ukończone </button>
                <button className="section__taskListHeaderButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie</button>
            </React.Fragment>
        )}
    </div>


);
export default Buttons;