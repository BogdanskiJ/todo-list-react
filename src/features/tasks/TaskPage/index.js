import Section, { WrongTaskSection } from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            {task
                ? <Section
                    title={task.content}
                    body={
                        <>
                            {(task.done
                                ? <div><strong>Ukończono:</strong> Tak</div>
                                : <div><strong>Ukończono:</strong> Nie</div>)}
                        </>
                    }
                />
                : <WrongTaskSection
                    title={"Przykro mi, ale nie znaleziono takiego zadania 🙁"}
                />
            }



        </Container>
    );
}

export default TaskPage;
