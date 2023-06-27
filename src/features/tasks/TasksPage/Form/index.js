import React, { useState, useRef } from 'react';
import { FormJs, ButtonJs } from "./styled";
import { useDispatch } from 'react-redux';
import { addTask } from '../../tasksSlice';
import { nanoid } from '@reduxjs/toolkit';
import Input from '../../Input';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            return;
        }
        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        inputRef.current.focus();
    };
    return (
        <FormJs 
            onSubmit={onFormSubmit}
        >
            <Input
                value={newTaskContent}
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <ButtonJs
            >Dodaj zadanie</ButtonJs>
        </FormJs>
    );

};

export default Form;