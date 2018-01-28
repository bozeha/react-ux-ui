import React, {Component} from 'react';
import Sizes from './sizes';
import '../../styles/body.css';
import NextButton from '../next_button' ;


class FullB extends Component
{

    render(props)
    {
        return (
            <div className='mainElementsContainer'>
            <Sizes/>
            <NextButton fullAppNext={this.props.fullApp}/>
            </div>
        )
    }
}

export default FullB