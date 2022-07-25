import React, {useState} from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
const [newTaskContent, setNewTaskContent] = useState("");

const onFormSubmit =(event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
};
    return (
        <form 
        onSubmit={onFormSubmit}
        className="section__backgroundColor sectionAddingTask__inputField" >
            <input 
            value={newTaskContent}
            className="sectionAddingTask__height" autoFocus
            placeholder="Co jest do zrobienia?" 
            onChange={({target}) => setNewTaskContent(target.value)}
            />
            <button className="sectionAddingTask__button">Dodaj zadanie</button>
        </form >
    );

};

export default Form;