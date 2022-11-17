import React from "react";
import { TaskList, NewTaskList, ButtonJs, Content, ButtonDelete } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone , removeTask} from "../tasksSlice";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        //   localStorage.setItem("tasks", JSON.stringify("tasks")),
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
                        {task.content}</Content>
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