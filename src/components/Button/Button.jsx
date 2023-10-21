import { useState } from 'react'
import './Button.css';

function Button({ label, children }) {
    return (
        <div className='button'>
            <div className="button-icon">
                {children}
            </div>
            <div className="button-label">
                {label}
            </div>
        </div>
    )
}

export default Button
