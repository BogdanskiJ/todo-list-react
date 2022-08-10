import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, }) => (

    <div>
        {tasks.length > 0 && (
            <React.Fragment>
                <button
                    onClick={toggleHideDone}
                    className="section__taskListHeaderButton"> {hideDone ? " Pokaż " : " Ukryj "}ukończone </button>
                <button
                    onClick={setAllDone}
                    className="section__taskListHeaderButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie</button>
            </React.Fragment>
        )}
    </div>


);
export default Buttons;