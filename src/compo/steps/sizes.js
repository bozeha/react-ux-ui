import React, {Component} from 'react'
import pizza from '../../assets/pizza.png'

class Sizes extends Component
{
    constructor (props) {
        super(props);
        this.state = {
            sizeElements:[
                {key:2,name:'בינוני',src:pizza},
                {key:1,name:'ענק',src:pizza},
                {key:3,name:'אישי',src:pizza},
                
                
            ]
        }
        

    }
    render()
    {
        return(
            <div className="sizes">
                
                    {this.state.sizeElements.map(e=>(
                    <div className="sizeElment">
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