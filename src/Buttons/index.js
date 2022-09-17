import React from "react";
import { ButtonJs } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, }) => (

    <div>
        {tasks.length > 0 && (
            <React.Fragment>
                <ButtonJs
                    onClick={toggleHideDone}> {hideDone ? " Pokaż " : " Ukryj "}ukończone </ButtonJs>
                <ButtonJs
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie</ButtonJs>
            </React.Fragment>
        )}
    </div>
);
export default Buttons;