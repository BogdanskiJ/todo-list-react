import React, {useState} from 'react';
import { FormJs, InputJs, ButtonJs } from "./styled";

const Form = ({ addNewTask }) => {
const [newTaskContent, setNewTaskContent] = useState("");

const onFormSubmit =(event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
};
    return (
        <FormJs 
        onSubmit={onFormSubmit}
        >
            <InputJs 
            value={newTaskContent}
            autoFocus
            placeholder="Co jest do zrobienia?" 
            onChange={({target}) => setNewTaskContent(target.value)}
            />
            <ButtonJs>Dodaj zadanie</ButtonJs>
        </FormJs>
    );

};

export default Form;