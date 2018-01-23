import React, {Component} from 'react'

let li_style ={
    listStyle:'none',
    float:'right'
}
let img_style ={
    height:'100px',
    width:'100px'
}
class BarElement extends Component
{
    render(props)
    {
        return(
            <li style={li_style}> 
                {this.props.name}
                      <img style={img_style} src={this.props.img}/>
                </li>

        )
    }
}

export default BarElement;