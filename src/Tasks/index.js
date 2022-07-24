import "./style.css";

const Tasks = (props) => (
        <ul className="sectionTaskList__tasks">{
                props.tasks.map(task => (
                        <li
                                className={`sectionTaskList__newTask ${task.done && props.hideDone ? "  sectionTaskList__tasks--hidden " : " "}`}
                        >
                                <button className="section__buttonDone"> {task.done ? "✓" : ""}</button>
                                <span className={`"js-taskDone${task.done ? " section__buttonDone--checked " : ""}"`}> {task.content}</span>
                                <button className="section__buttonDelete js-remove">🗑</button>
                        </li>

                ))
        }</ul>
);

export default Tasks; 