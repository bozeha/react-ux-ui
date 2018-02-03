import React, {Component} from 'react';
import Sizes from './sizes';
import '../../styles/body.css';
import NextButton from '../next_button';
import TypeOfPizza from './type';
import Extras from './extras';
import Drinks from './drinks';
import Payment from './payment';


class FullB extends Component
{



constructor (props) {
    super();
    this.state={
        saveData:{
            sizes:1,
            pizzaType:1,
            drink:0
            
    },
    extras:[
        {id:0,active:false},
        {id:1,active:false},
        {id:2,active:false},
        {id:3,active:false},
        {id:4,active:false},
        {id:5,active:false}
    ]
    };

}
    render(props)
    {
        
        return (
            <div className='mainElementsContainer'>
            {this.props.fullApp.state.currentStep==1?<Sizes sendToSizes={this}/>:this.props.fullApp.state.currentStep==2?<TypeOfPizza sendToType={this}/>:
            this.props.fullApp.state.currentStep==3?<Extras sendToExtras={this}/>:this.props.fullApp.state.currentStep==4?<Drinks sendToDrink={this}/>:this.props.fullApp.state.currentStep==5?<Payment/>:''}
            {console.log('position:'+this.props.fullApp.state.currentStep)}
            <NextButton fullAppNext={this.props.fullApp}/>
            </div>
        )
    }
}

export default FullB