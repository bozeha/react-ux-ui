import React ,{Component} from 'react';
import pizza from '../../assets/pizza.png'
import backgroundPizza from '../../assets/arrow-back.png'



class Sizes extends Component
{

 
    componentWillMount(){
        console.log('componentWillMountSizes');
        const tempSizeElemnts =[
            ...this.state.sizeElements
        ]
        tempSizeElemnts.map(e=>
        (
            e.key== this.props.sendToSizes.state.saveData.sizes?e.class='selected':''
        )
        )
        debugger;
        this.setState({sizeElements:tempSizeElemnts});

    }
    constructor (props) {
        {console.log('constructor')}
        super(props);
        this.state = {
            sizeElements:[
                {key:0,name:'בינוני',src:pizza,id:'',class:''},
                {key:1,name:'ענק',src:pizza,id:'',class:''},
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
            })
            this.setState({sizeElements:tempSizes});
            //this.props.sendToSizes.setState({sizes:place});
            this.props.sendToSizes.state.saveData.sizes=place;
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