import { Component, CSSProperties } from 'react'
import Button from '../button'
import './styles.css'

type CardProps = {
    style: CSSProperties | undefined
    imgUrl: string
    buttonMessage: string
    handleClick: () => void
}

class Card extends Component<CardProps> {
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