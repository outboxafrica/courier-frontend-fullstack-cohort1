import React from 'react'

const Form = ({ placeHolder, title,value , onChange }) => {
    return (
        <form >
            <h3>{title}</h3>
            <input type='text' placeholder={placeHolder} value={value} onChange={onChange}/>         
        </form>

    )
}
export default Form
