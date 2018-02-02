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
                   this.props.fullAppNext.setState({currentStep:this.state.buttonCurrentStep,buttonStep:this.state.buttonCurrentStep+1});
                   this.setState({buttonCurrentStep:this.state.buttonCurrentStep+1});
                   }}>{this.state.buttonCurrentStep==4?<span>המשך לתשלום </span>:<span>המשך </span>}</p>
                {console.log(this.props.fullAppNext.state.currentStep)}
                {console.log(this.props.fullAppNext.state.buttonStep)}
                {this.state.buttonCurrentStep>1?
                    <p className='NextButton' onClick={()=>{
                        this.props.fullAppNext.setState({currentStep:this.state.buttonCurrentStep-1,buttonStep:this.state.buttonCurrentStep-1});
                        this.setState({buttonCurrentStep:this.state.buttonCurrentStep-1})
                    }}>חזור אחורה
                </p>:''
                }
            </div>
        )
    }
}


export default NextButton;