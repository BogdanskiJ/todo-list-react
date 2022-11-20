import React from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons, { ExampleTaskButtons } from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useLocation, useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        setExampleTasks={<ExampleTaskButtons />}
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
