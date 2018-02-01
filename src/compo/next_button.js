import React , {Component} from 'react';

let CurrentStyle={
    /* width:'100%',
    display: 'block',
    display: 'block',
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize:'20px',
    color:'red' */
    textAlign: 'center',
    float: 'none',
    margin: '0 auto',
    width: '200px',
    fontSize:'20px',
    color:'red',
    paddingTop:'50px',
    width:'100%',
    display:'inline-block'
}

class NextButton extends Component
{
    state={
        buttonCurrentStep:1
        
    }
    render(props)
    {
        return(

            <div style={CurrentStyle}>   
               <p className='NextButton' onClick={()=>{
                   //this.props.fullAppNext.sleepFunc();
                   this.props.fullAppNext.setState({currentStep:this.state.buttonCurrentStep,buttonStep:this.state.buttonCurrentStep+1});
                   this.setState({buttonCurrentStep:this.state.buttonCurrentStep+1});
                   
                   }}>{this.state.buttonCurrentStep==4?<span>המשך לתשלום </span>:<span>המשך </span>}</p>
                {console.log(this.props.fullAppNext.state.currentStep)}
                {console.log(this.props.fullAppNext.state.buttonStep)}
                {/* {console.log(this.state.buttonCurrentStep)}
                {console.log(this.props.fullAppNext.state.currentStep)} */}
            </div>
        )
    }
}


export default NextButton;