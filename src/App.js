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
          <TopBar appAll={this}/> 
        </header>
        <container>
          <FullB/>
        </container>
      </div>
    );
  }
}

export default App;
