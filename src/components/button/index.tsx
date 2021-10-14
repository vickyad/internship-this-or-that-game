import {Component} from 'react'
import './styles.css'

type ButtonProps = {
    handleClick: () => void
    message: string
}

class Button extends Component <ButtonProps> {
    render() {
        return (
            <button className="this-that-button" onClick={() => this.props.handleClick()}>{this.props.message}</button>
        )
    }
  }
export default Button