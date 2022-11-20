import React, { useState } from "react";
import { ButtonJs } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, fetchExampleTasks } from "../../tasksSlice";



export const ExampleTaskButtons = () => {
    const dispatch = useDispatch();

    const [exampleTasksStatus, setExampleTasksStatus] = useState({
        state: false
    });

    const timeout = () => {
        setExampleTasksStatus({ state: true })
        setTimeout(() => setExampleTasksStatus({ state: false }) & (dispatch(fetchExampleTasks())), 1000)
    };

    return (
        <div>
            {exampleTasksStatus.state === false
                ? (
                    <ButtonJs onClick={() => timeout()}>
                        Pobierz przykładowe zadania
                    </ButtonJs>
                )
                : (
                    <ButtonJs disabled>
                        Ładowanie
                    </ButtonJs>
                )
            }
        </div>
    );
};



export const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    return (
        <div>

            {tasks.length > 0 && (
                <React.Fragment>
                    <ButtonJs
                        onClick={() => dispatch(toggleHideDone())}> {hideDone ? " Pokaż " : " Ukryj "}ukończone </ButtonJs>
                    <ButtonJs
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie</ButtonJs>
                </React.Fragment>
            )}
        </div>
    );
};

export default Buttons;



