import React from 'react'
import Form from './Form'
import FormLocation from './FormLocation'
import PackageDetails from './PackageDetails'
import Distance from './Distance'
import Charges from './Charges'
import Buttons from './Buttons'

const MakeOrder = () => {
    return (
        // Form container
        <div>
            <form>
                <ol>
                    <li>From</li>
                        <div className='form'>
                            <Form placeHolder='Enter Your Name'/>
                            <FormLocation title='Enter PickUp Location'/>
                            <textarea placeholder='Write a note'></textarea>
                        </div>

                    <li>To</li>
                        <div className='form'>
                            <Form placeHolder='Enter Receiver Name'/>
                            <FormLocation title='Enter Destination Location'/>
                        </div>
                    <li>Package</li>
                        <div className='form'>
                            <div className='package'>
                                <PackageDetails />
                                <Distance />
                                <Charges />
                            </div>
                        </div>
                </ol>
            </form>
            <Buttons />
        </div>
    )
}

export default MakeOrder
