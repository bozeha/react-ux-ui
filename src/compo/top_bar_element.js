import React, {Component} from 'react';
import '../styles/top-bar-element.css';

let li_style ={
    listStyle:'none',
    float:'right'
}
let img_style ={
    height:'100px',
    width:'100px'
}
class BarElement extends Component
{
    render(props)
    {
        return(
            <li  key={this.props.keyName} className={this.props.classFunc}> 
                    {/* <p onClick={()=>this.props.ff.setState({currentStep:2})}>{this.props.ff.state.currentStep}</p> */}
                      <img style={img_style} src={this.props.img} />
                        <p>{this.props.name}</p>
                      {/* 
                       {this.props.currentStep==this.props.keyName-1?
                        <span className="nextStep" onClick={()=>this.props.changeFunc(this.props.keyName)}>המשך</span>
                        :''
                       } */}
                </li>

        )
    }
}

export default BarElement;