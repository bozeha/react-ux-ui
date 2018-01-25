import React, { Component } from 'react';
import './App.css';
import TopBar from './compo/top_bar';
import TwoSec from './compo/2sec';

class App extends Component {
  constructor (props) {
    super(props);
  }
  state = {
    sleep:true
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
    
    
    
    /*   const sleep =()=>{
      setTimeout(()=>this.setState)
    } */
    
    return (
      <div className="App">
      
        <header className="App-header">
        {/* <button onClick={this.sleepFunc}>xxxxxxxxxxxxx</button> */}
        {this.state.sleep?
        <TwoSec/>:''
        }
          <TopBar/> 
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
