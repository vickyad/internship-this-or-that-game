import { CSSProperties } from "react"

type CardType = {
    style: CSSProperties | undefined
    imgUrl: string
    buttonMessage: string
    handleClick: () => void
}
export default CardType