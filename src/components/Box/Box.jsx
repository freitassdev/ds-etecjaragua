import { useState } from 'react'
import './Box.css';

function Box({ children, title }) {
    return (
        <div className="box shadow-5">
            <div className="box-container">
                <div className="box-title">
                    <h1 className='title'>{title}</h1>
                </div>
                <div className="box-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Box
