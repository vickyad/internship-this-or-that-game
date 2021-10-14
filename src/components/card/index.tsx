import { Component } from 'react'
import CardType from '../../types/CardType'
import Button from '../button'
import './styles.css'

class Card extends Component<CardType> {
    render() {
        return (
            <div style={this.props.style} className="this-that-card">
                <img alt="" className="this-that-img" src={this.props.imgUrl} />
                <Button message={this.props.buttonMessage} handleClick={() => this.props.handleClick()} />
            </div>
        )
    }
}
export default Card