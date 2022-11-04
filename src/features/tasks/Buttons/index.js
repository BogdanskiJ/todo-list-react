import React from "react";
import { ButtonJs } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <div>
            {tasks.length > 0 && (
                <React.Fragment>
                    <ButtonJs
                        onClick={() => dispatch(toggleHideDone())}> {hideDone ? " Pokaż " : " Ukryj "}ukończone </ButtonJs>
                    <ButtonJs
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie</ButtonJs>
                </React.Fragment>
            )}
        </div>
    );
};

export default Buttons;