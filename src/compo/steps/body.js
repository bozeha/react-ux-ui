import React, {Component} from 'react';
import Sizes from './sizes';
import '../../styles/body.css';
import NextButton from '../next_button';
import TypeOfPizza from './type';
import Extras from './extras';


class FullB extends Component
{

constructor (props) {
    super();
    this.state={
        saveData:[
            {sizes:1}
        ]
    };

}
    render(props)
    {
        
        return (
            <div className='mainElementsContainer'>
            {this.props.fullApp.state.currentStep==1?<Sizes sendToSizes={this}/>:this.props.fullApp.state.currentStep==2?<TypeOfPizza/>:this.props.fullApp.state.currentStep==3?<Extras/>:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
            {console.log('position:'+this.props.fullApp.state.currentStep)}
            <NextButton fullAppNext={this.props.fullApp}/>
            </div>
        )
    }
}

export default FullB