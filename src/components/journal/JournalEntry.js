import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvTTuIu8HIn8ZF8NGxCt0moGs0ffPwR3SOA&usqp=CAU)"
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <span>28</span>
            </div>
        </div>
    )
}
