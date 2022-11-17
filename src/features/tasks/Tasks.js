import React from "react";
import Form from "./TasksPage/Form";
import TasksList from "./TasksPage/TasksList";
import Buttons, { ExampleTaskButtons } from "./TasksPage/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        setExampleTasks={<ExampleTaskButtons />}
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
