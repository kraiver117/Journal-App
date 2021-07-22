import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const {active: note} = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);
    const  { body, title } = formValues;

    const activateId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activateId.current) {
            reset(note);
            activateId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(
            activeNote(
                formValues.id, 
                {
                    ...formValues
                }
            )
        )
    }, [formValues, dispatch]);

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text" 
                    placeholder="Some awesome title" 
                    className="notes__title-input" 
                    autoComplete="off" 
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea 
                    placeholder="What happened today?" 
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                />

                {
                    (note.url) &&
                    <div className="notes__image">
                        <img 
                            src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png" 
                            alt="ReactJS"
                        />
                    </div>
                }
                
            </div>

        </div>
    )
}
