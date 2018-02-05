import React , {Component} from 'react';
import Feffect from './infos/f_effect';
import Person from './infos/person';
import Max7 from './infos/max7'
import '../styles/info.css'


class Info extends Component
{
    state=({
            button:0
    })

    render(props)
    {


        return(
            <div>
            <ul className='MainInfo'>
                    <li onClick={()=>{this.setState({button:1})}}>f</li>
                    <li onClick={()=>{this.setState({button:2})}}>person</li>
                    <li onClick={()=>{this.setState({button:0});this.props.twoSec()}}>2-Sec</li>
                    {this.props.fullApp.state.currentStep==2?<li onClick={()=>{this.setState({button:3})}}>Max- 7</li>:''}
                </ul>
                   {this.state.button==1?<Feffect/>:this.state.button==2?
                   <Person/>:this.state.button==3?<Max7/>:''}
            </div>
        )
    }

}

export default Info;