import React, {Component} from 'react'
import logo from '../assets/logo.png';
import rulerPizza from '../assets/ruler-pizza.png';
import fewPizza from '../assets/few_pizza.png';
import delivery from '../assets/delivery.png';
import extras from '../assets/extras.png';
import drink from '../assets/drink.png';
import BarElement from './top_bar_element';

class TopBar extends Component
{
    state = {
        eName:[
            {key:0,name : 'גודל',img:rulerPizza,CurrentClass:'fix'},
            {key:1,name : 'סוג',img:fewPizza,CurrentClass:'blur'},
            {key:2,name : 'תוספות',img:extras,CurrentClass:'blur'},
            {key:3,name : 'שתיה',img:drink,CurrentClass:'blur'},
            {key:4,name : 'שלם',img:delivery,CurrentClass:'blur'}
            ],
            currentStep:"0"
    }

    ChageStep = (currentStep)=>
    {
        

        const tempEname =[
            ...this.state.eName
        ]

        /* const tempEname = Object.assign({},this.state.eName); */
        debugger;

        tempEname.map(e=>
        {
            
            e.key<=currentStep?e.CurrentClass='fix':e.CurrentClass='blur';
        }
        )
        this.setState({eName:tempEname});
        this.setState({currentStep:currentStep});

        console.log(this.state);
        //debugger;
    }
    render()
    {
        
             let style={
                 width:'50px',
                 height:'50px',
                 float:'left'
            }
            
        return (
    
            <div>   
            
                <img style={style} src={logo}/>
                    <ul className='top_ul'>
                    
                        
                        {this.state.eName.map((e)=>(
                            <span><BarElement currentStep={this.state.currentStep} keyName={e.key} changeFunc={this.ChageStep} name={e.name} classFunc={e.CurrentClass} img={e.img}/></span>) )}
                      {console.log('s')}
                        {/* <BarElement name={'ss'}/> */}
                    </ul>
            </div>
        )
    }

}

export default TopBar;