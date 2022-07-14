import Form from "./Form";
import Tasks from "./Tasks";
import "./Form/style.css";
import "./Tasks/style.css";
import Buttons from "./Buttons";
import "./Buttons/style.css";
import Section from "./Section";
import "./Section/style.css";
import Header from "./Header";
import "./Header/style.css";
import Container from "./Container";
import "./Container/style.css";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
      />

    </Container>
  );
}

export default App;
