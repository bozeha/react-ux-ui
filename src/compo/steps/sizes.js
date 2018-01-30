import React, {Component} from 'react'
import pizza from '../../assets/pizza.png'
import backgroundPizza from '../../assets/arrow-back.png'

const addClassSelect = (event)=>
{
console.log(event.target );
console.log(this.show)
}
const updateClasses =(x)=>
{
    console.log(this.state);
    
}

class Sizes extends Component
{


    componentWillMount(){
        console.log('componentWillMountSizes');
    }
    constructor (props) {
        super(props);
        this.state = {
            sizeElements:[
                {key:0,name:'בינוני',src:pizza,id:'',class:''},
                {key:1,name:'ענק',src:pizza,id:'',class:'selected'},
                {key:2,name:'אישי',src:pizza,id:'',class:''},
                
                
            ]
        }
    }
    
 
    render(props)
    {
        const updateClasses =(place)=>
        {
            const tempSizes =[
                ...this.state.sizeElements
            ]
            
            tempSizes.map(e=>{
                e.key==place?e.class='selected':e.class='';
                console.log(e.name);
                console.log(e);
            })
            this.setState({sizeElements:tempSizes});
            this.props.sendToSizes.setState({saveData:[{sizes:place}]});
            console.log(this.props.sendToSizes.state);
        }
        return(
            <div className="sizes">
                
                    {this.state.sizeElements.map((e,index)=>(
                    <div onClick={()=>updateClasses(index)} key={index} id={'size'+index} className={"sizeElment "+e.class }>
                      <h2>{e.name}</h2>
                         <img src={e.src}/>
                     </div>
                    )
                    )}
                
                
            </div>
        )
    }
}

export default Sizes;