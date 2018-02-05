import React , {Component} from 'react';
import Feffect from './infos/f_effect';
import Person from './infos/person';
import '../styles/info.css'


class Info extends Component
{
    render()
    {


        return(
            <ul className='MainInfo'>
                   <Feffect/>
                   <Person/>
                </ul>
        )
    }

}

export default Info;