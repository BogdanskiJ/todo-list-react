import React from 'react';
import "./style.css";

const Form = () => (
    <form className="section__backgroundColor sectionAddingTask__inputField" >
        <input className="sectionAddingTask__height" autoFocus
            placeholder="Co jest do zrobienia?" />
        <button className="sectionAddingTask__button">Dodaj zadanie</button>
    </form >
);

export default Form;