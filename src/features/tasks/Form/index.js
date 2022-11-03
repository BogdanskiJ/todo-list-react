import React, {useState, useRef} from 'react';
import { FormJs, InputJs, ButtonJs } from "./styled";

const Form = ({ addNewTask }) => {
const [newTaskContent, setNewTaskContent] = useState("");
const inputRef = useRef(null);



const onFormSubmit =(event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
};
    return (
        <FormJs 
        onSubmit={onFormSubmit}
        >
            <InputJs 
            value={newTaskContent}
            ref={inputRef}
            placeholder="Co jest do zrobienia?" 
            onChange={({target}) => setNewTaskContent(target.value)}
            />
            <ButtonJs
            >Dodaj zadanie</ButtonJs>
        </FormJs>
    );

};

export default Form;