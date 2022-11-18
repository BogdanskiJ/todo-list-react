import React from "react";
import { TaskList, NewTaskList, ButtonJs, Content, ButtonDelete } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask, getTaskById} from "../../tasksSlice";
import { StyledLink } from "./styled"
import { useLocation, useParams } from "react-router-dom";

const TasksList = () => {
    


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");




    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    
    return (
        <TaskList>{
            tasks.map(task => (
                <NewTaskList
                    hidden={task.done && hideDone}
                    key={task.id}>
                    <ButtonJs
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    > {task.done ? "✓" : ""}
                    </ButtonJs>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <ButtonDelete buttonDelete
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑</ButtonDelete>
                </NewTaskList>
            ))
        }</TaskList>
    );
};

export default TasksList;