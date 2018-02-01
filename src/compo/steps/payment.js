import React, {Component} from 'react'
import Paypal from './payments/paypal'
import Visa from './payments/visa'
import InPlace from './payments/inplace'

class Payment extends Component
{

    render()
    {
        return(

            <div>
                <Paypal/>
                <Visa/>
                <InPlace/>
            </div>
        )
    }
}

export default Payment