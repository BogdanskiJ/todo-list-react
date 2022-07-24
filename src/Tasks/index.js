import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask}) => (
        <ul className="sectionTaskList__tasks">{
                tasks.map(task => (
                        <li
                                className={`sectionTaskList__newTask ${task.done && hideDone ? "  sectionTaskList__tasks--hidden " : " "}`}
                        >
                                <button className="section__buttonDone"> {task.done ? "✓" : ""}</button>
                                <span className={`"js-taskDone${task.done ? " section__buttonDone--checked " : ""}"`}> {task.content}</span>
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