import React ,{Component} from 'react';
import type1 from '../../assets/Reef-Beef.png';



class TypeOfPizza extends Component
{
    
            constructor (props){
                super(props);
                this.state= {
                     pizzaType: 
                    [
                        { id:0,name:'פיצה בולגרית',src:type1,class:''},
                        { id:1,name:'פיצת הבית',src:type1,class:'selected'},
                        { id:2,name:'פיצה ישראלית',src:type1,class:''},
                        { id:3,name:'פיצה איטלקית',src:type1,class:''},
                        { id:4,name:'פיצה פצץ',src:type1,class:''},
                        { id:5,name:'פיצה פיקנטי',src:type1,class:''},
                        { id:6,name:'פיצה אנשובי',src:type1,class:''}
                    
                    ]
    
                }
            }
    render (props)
    {
        const changeTypeClass=(currentIndex)=>
        {
            const tempPizzaType = 
            [
                ...this.state.pizzaType
            ]
        
            tempPizzaType.map(e=>{
                e.id == currentIndex?e.class='selected':e.class='' ;
            })
            
            
            this.setState({pizzaType:tempPizzaType})
        }


        return(

            <div className='mainTypeDiv'>
                {this.state.pizzaType.map((e,index)=>(
                        <div onClick={()=>changeTypeClass(index)} className={'pizzaType '+e.class}>
                            <img src={e.src} />
                            <span>{e.name}</span>
                        </div>
                ))
                }
            </div>
        )
    }
}


export default TypeOfPizza