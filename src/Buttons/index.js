import "./style.css"

const Buttons = ({tasks, hideDoneTask}) => {
    if (tasks.length  === 0) {
       return null;
    } else {
        return (
            <div>
                
                
                <h2 className="section__headerWeight">Lista zadań</h2>
    <button className="section__taskListHeaderButton"> {hideDoneTask ? " Pokaż " : " Ukryj "}ukończone </button>
   
   <button className="section__taskListHeaderButton" 
   disabled={tasks.every(({ done }) => done )}
    >
        Ukończ wszystkie</button>
            </div>
        )

    };

};
export default Buttons;