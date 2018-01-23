import React, {Component} from 'react'
import logo from '../assets/logo.png';
import BarElement from './top_bar_element'
class TopBar extends Component
{
    render()
    {
             let style={
                 width:'150px',
                 height:'150px',
                 float:'left'
            }
            const listBarE ={
                    eName:[
                    {name : 'גודל'},
                    {name : 'סוג'},
                    {name : 'תוספות'},
                    {name : 'שתיה'},
                    {name : 'שלם'}
                    ]
            }
        return (
    
            <div>   
                <img style={style} src={logo}/>
                    <ul>
                        {listBarE.eName.map(e=>
                             )
                            )}
                    
                    </ul>
            </div>
        )
    }

}

export default TopBar;