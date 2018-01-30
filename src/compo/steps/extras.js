import React , {Component} from 'react'

import basal from  '../../assets/extras/basal.png';
import gamba from  '../../assets/extras/gamba.png';
import mushroom from  '../../assets/extras/mushroom.png';
import paparoni from  '../../assets/extras/paparoni.png';
import srimps from  '../../assets/extras/srimps.png';
import tomato from  '../../assets/extras/tomato.png';

class Extras extends Component
{

    constructor (props){
        super(props)
        this.state = {
            extras:[
                {id:0,name:'paparony',src:basal,class:''},
                {id:1,name:'paparony',src:gamba,class:''},
                {id:2,name:'paparony',src:mushroom,class:''},
                {id:3,name:'paparony',src:paparoni,class:''},
                {id:4,name:'paparony',src:srimps,class:''},
                {id:5,name:'paparony',src:tomato,class:''}
            ]
        }

    }
    render()
    {
        return(

            <div className='extras'>
        
                    {this.state.extras.map((e,index)=>(
                        <div onClick={this.selectExtra(index)} className={'oneExtra '+e.class} key={e.id}>
                             <p>{e.name}</p>
                             <img src={e.src}/>
                        </div>

                    ))}
            </div>

        )
    }
}


export default Extras;