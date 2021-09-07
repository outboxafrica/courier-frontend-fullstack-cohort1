import React from 'react'

const Form = ({ placeHolder, title }) => {
    return (
        <form>
            <h3>{title}</h3>
            <input type='text' placeholder={placeHolder}/>         
        </form>

    )
}
export default Form
