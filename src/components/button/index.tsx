import { Component } from 'react'
import ButtonType from '../../types/ButtonType'
import './styles.css'

class Button extends Component<ButtonType> {
    render() {
        return (
            <button className="this-that-button" onClick={() => this.props.handleClick()}>{this.props.message}</button>
        )
    }
}
export default Button