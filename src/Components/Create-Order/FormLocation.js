import React from 'react'

const FormLocation = ({ title }) => {
    return (
        <form>
            <h6 className='titles'>{title}</h6>
            <div className='location'>
                <input className='location-input' type="text" placeholder='Parish' />
                <input className='location-input' type="text" placeholder='District'/>
            </div>
            <input type="text" placeholder='Enter Phone Number'className='phone-input'/>
        </form>
    )
}

export default FormLocation
