import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

import { useParams } from "react-router-dom";
import tasksSlice from "../tasksSlice";

function TaskPage() {
    const params = useParams();
    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={params.id}
                body={<>nana</>}
            />
        </Container>
    );
}

export default TaskPage;
