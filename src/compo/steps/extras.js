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
                {id:0,name:'בצל',src:basal,class:'',active:false},
                {id:1,name:'גמבה',src:gamba,class:'',active:false},
                {id:2,name:'פיטריות',src:mushroom,class:'',active:false},
                {id:3,name:'פפרוני',src:paparoni,class:'',active:false},
                {id:4,name:'שרימפס',src:srimps,class:'',active:false},
                {id:5,name:'עגבניות',src:tomato,class:'',active:false}
            ]
        }

    }
    render(props)
    {

        const ex= ()=>
        {
                alert('x');
        }
        const selectExtra =(currentIndex)=>
        {
            const tempExtras  = 
            [
                ...this.state.extras
            ]

            tempExtras.map(e=>{
                currentIndex==e.id&&e.active==true?e.class='':currentIndex==e.id&&e.active==false?e.class='selected':'';
                currentIndex==e.id&&e.active==true?e.active=false:currentIndex==e.id&&e.active==false?e.active=true:'';
            })

            this.setState({
                    extras:tempExtras
            })
            
            
        }
        return(

            <div className='extras'>
        
                    {this.state.extras.map((e,index)=>(<div onClick={()=>selectExtra(index)} className={'oneExtra '+e.class} key={e.id}>
                             <p>{e.name}</p>
                             <img src={e.src}/>
                        </div>))
                    }
            </div>

        )
    }
}


export default Extras;