import Form from "./Form";
import Tasks from "./Tasks";
import "./Form/style.css";
import "./Tasks/style.css";
import Buttons from "./Buttons";
import "./Buttons/style.css";
import Section from "./Section";
import "./Section/style.css";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <main className="body__main">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__headerWeight section__backgroundColor">Dodaj nowe zadanie</h2>
        <div>
          <Form />
        </div>
        <div className="section__buttonTaskList">
          <h2 className="section__headerWeight">Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTask={hideDoneTask}/>
        </div>
        <div className="section__backgroundColor">
          <Tasks tasks={tasks} hideDoneTask={hideDoneTask}/>
        </div>
      </section>

    </main>
  );
}

export default App;
