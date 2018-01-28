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
   
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    constructor (props) {
        console.log('constracutor');
        super()
        this.state={
        eName:[
            {key:0,name : 'גודל',img:rulerPizza,CurrentClass:'fix'},
            {key:1,name : 'סוג',img:fewPizza,CurrentClass:'blur'},
            {key:2,name : 'תוספות',img:extras,CurrentClass:'blur'},
            {key:3,name : 'שתיה',img:drink,CurrentClass:'blur'},
            {key:4,name : 'שלם',img:delivery,CurrentClass:'blur'}
            ],
            currentStep:"0"
        }

    }
  

    ChageStep = ()=>
    {
        if (this.props.appAll.state.currentStep<this.props.appAll.state.buttonStep)
        {
            console.log('changestep');
            const tempEname =[
                ...this.state.eName
            ]
            
            ////////////////////////////////////////dddddddddddddddddddddddddddddddddddddddddddd
            debugger;

            tempEname.map(e=>
            {
                
                e.key<=this.props.appAll.state.currentStep?e.CurrentClass='fix':e.CurrentClass='blur';
            }
            )

            this.setState({eName:tempEname});
            this.props.appAll.setState({currentStep:this.props.appAll.state.currentStep+1})
        }
    }
    render(props)
    {

        {console.log('render')}
        {this.ChageStep()}
        /* {console.log(this.props.appAll.state.currentStep)} */
             let style={
                 width:'50px',
                 height:'50px',
                 float:'left'
            }
            
        return (
    
            <div>   
                {/* <div onClick={()=>this.props.appAll.setState({currentStep:1})}>{this.props.appAll.state.currentStep}ggggggggggggggg</div> */}
                <img className='logo' style={style} src={logo}/>
                    <ul className='top_ul'>    
                        {this.state.eName.map((e,index)=>(
                            <span key={index}><BarElement ff={this.props.appAll} currentStep={this.state.currentStep} key={e.key.props} keyName={e.key} changeFunc={this.ChageStep} name={e.name} classFunc={e.CurrentClass} img={e.img}/></span>) )}
                    </ul>
            </div>
        )
    }

}

export default TopBar;