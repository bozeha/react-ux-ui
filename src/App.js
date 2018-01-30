import React, { Component } from 'react';
import './styles/App.css';
import TopBar from './compo/top_bar';
import TwoSec from './compo/2sec';
import FullB from './compo/steps/body'

class App extends Component {
  constructor (props) {
    super(props);
  }
  state = {
    sleep:true,
    currentStep:1,
    buttonStep:1
    
  }
  
  componentWillMount(){
    console.log('componentWillMount');
    this.sleepFunc();

}
  sleepFunc =()=>
  {
    this.setState({sleep:true});
  setTimeout(()=>this.setState({sleep:false}),2000);
  }
  render() {
    
    {console.log('main app render')}
    
    
    return (
      <div className="App">
      
        <header className="App-header">
        {this.state.sleep?
        <TwoSec/>:''
        }
          <TopBar appAll={this}/> 
        </header>
        <div className="contanier">
          <FullB fullApp={this}/>
        </div>
      </div>
    );
  }
}

export default App;
