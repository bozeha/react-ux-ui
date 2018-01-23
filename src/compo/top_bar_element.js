import React, {Component} from 'react'

class BarElement extends Component
{
    render(props)
    {
        return(
            <li>
                {this.props.name}
                </li>

        )
    }
}

export default BarElement;