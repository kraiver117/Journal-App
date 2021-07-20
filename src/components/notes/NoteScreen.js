import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off" />
                <textarea placeholder="What happened today?" className="notes__textarea"></textarea>

                <div className="notes__image">
                    <img src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png" alt="ReactJS"/>
                </div>
            </div>

        </div>
    )
}
