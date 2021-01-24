import React from 'react'
import './customButton.styles.scss'
export default function CustomButton({children,...otherPorps}:any) {
    return (
        <button className="custom-button" {...otherPorps} > 
            {children}
        </button>
    )
}
