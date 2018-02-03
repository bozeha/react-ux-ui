import React ,{Component} from 'react';
import cola from  '../../assets/cola.png';
import sprite from  '../../assets/sprite.png';
import fanta from  '../../assets/fanta.png';




class Drinks extends Component{

    componentWillMount (props) {

        const firstDrinkList = [
            ...this.state.drinkList
        ]

        firstDrinkList.map(e=>{

            e.id==this.props.sendToDrink.state.saveData.drink?e.drinkClass='selected':e.drinkClass=''

        }
        )
    }

    constructor(props){
        super(props);
        this.state = {
            drinkList:[
                {id:0,name:'ספריט',drinkClass:'',src:sprite},
                {id:1,name:'קוקה קולה',drinkClass:'',src:cola},
                {id:2,name:'פאנטה',drinkClass:'',src:fanta}
            ]
        }
    }

    render(props)
    {
      
        const drinkSelect =(CurrentIndex)=>{
            debugger;

            const tempDrinkList =[
                ...this.state.drinkList
            ]   
            debugger;
            tempDrinkList.map(e=>(
                
                e.id == CurrentIndex?e.drinkClass='selected':e.drinkClass=''
            ))
            
            this.setState({
                drinkList:tempDrinkList
            })
            this.props.sendToDrink.state.saveData.drink= CurrentIndex;
        }
        return (

            <div className='drinks'>
                {this.state.drinkList.map((e,index)=>(<div  onClick={()=>drinkSelect(index)} className={e.drinkClass+' drinkBox'}>
                    <img src={e.src}/>
                    <span>{e.name}</span>
                </div>
            ))}
            </div>
        )
    }

}

export default Drinks;