import React from "react";
import { TaskList, NewTaskList, ButtonJs, Content, ButtonDelete } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask, getTaskById, selectTasks, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { StyledLink } from "./styled"
import { useLocation, useParams } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);


  const tasks = useSelector(state => selectTasksByQuery(state, query));

  const hideDone = useSelector(selectHideDone);


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