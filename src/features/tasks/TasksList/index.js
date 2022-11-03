import { TaskList, NewTaskList, ButtonJs, Content, ButtonDelete } from "./styled";


const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
        localStorage.setItem("tasks", JSON.stringify(tasks)),
        <TaskList>{
                tasks.map(task => (
                        <NewTaskList
                                hidden={task.done && hideDone}
                                key={task.id}>
                                <ButtonJs
                                        onClick={() => toggleTaskDone(task.id)}
                                > {task.done ? "✓" : ""}
                                </ButtonJs>
                                <Content done={task.done}>
                                        {task.content}</Content>
                                <ButtonDelete buttonDelete
                                        onClick={() => removeTask(task.id)}
                                >
                                        🗑</ButtonDelete>
                        </NewTaskList>

                ))
        }</TaskList>

);

export default TasksList; 