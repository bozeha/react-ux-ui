import React, {Component} from 'react'
import logo from '../assets/logo.png';
import rulerPizza from '../assets/ruler-pizza.png';
import fewPizza from '../assets/few_pizza.png';
import BarElement from './top_bar_element'
class TopBar extends Component
{
    render()
    {
             let style={
                 width:'50px',
                 height:'50px',
                 float:'left'
            }
            const listBarE ={
                    eName:[
                    {name : 'גודל',img:rulerPizza},
                    {name : 'סוג',img:fewPizza},
                    {name : 'תוספות'},
                    {name : 'שתיה'},
                    {name : 'שלם'}
                    ]
            }
        return (
    
            <div>   
                <img style={style} src={logo}/>
                    <ul class='top_ul'>
                        {listBarE.eName.map((e)=>(<span><BarElement name={e.name} img={e.img}/></span>) )}
                      
                        {/* <BarElement name={'ss'}/> */}
                    </ul>
            </div>
        )
    }

}

export default TopBar;