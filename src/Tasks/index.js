import "./style.css";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
        localStorage.setItem("tasks", JSON.stringify(tasks)),
        <ul className="sectionTaskList__tasks">{
                tasks.map(task => (
                        <li

                                className={`sectionTaskList__newTask ${task.done && hideDone ? "  sectionTaskList__tasks--hidden " : " "}`}
                                key={task.id}
                        >
                                <button
                                        className="section__buttonDone"
                                        onClick={() => toggleTaskDone(task.id)}
                                > {task.done ? "✓" : ""}
                                </button>
                                <span className={`"js-taskDone ${task.done ? " section__buttonDone--checked " : ""}"`}> {task.content}</span>
                                <button
                                        className="section__buttonDelete js-remove"
                                        onClick={() => removeTask(task.id)}
                                >
                                        🗑</button>
                        </li>

                ))
        }</ul>

);

export default Tasks; 