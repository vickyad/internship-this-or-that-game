import { Component } from 'react'
import Card from '../card'
import axios from 'axios'
import Leaderboard from '../leaderboard'
import './styles.css'

type ResponseType = {
  image: string
  link: string
}

type ThisOrThatStates = {
  imagesSelected: { img: string, occurences: number }[]
  thisImg: string
  thatImg: string
  opacity: number
}

const styles = {
  transition: 'all 1s ease-out'
}

const getLocalStorageData = () => {
  const rawData = localStorage.getItem('rank-data')
  return rawData ? JSON.parse(rawData) : []
}

const addNewImg = (currentList: { img: string, occurences: number }[], newItem: string) => {
  const index = currentList.findIndex(x => x.img === newItem)
  if (index >= 0) {
    currentList[index] = { ...currentList[index], occurences: currentList[index].occurences + 1 }
  } else {
    currentList.push({ img: newItem, occurences: 1 })
  }
  currentList.sort((a, b) => a.occurences > b.occurences ? -1 : 1)
  return currentList
}

class ThisOrThatDisplay extends Component<{}, ThisOrThatStates> {
  constructor(props: any) {
    super(props)
    this.state = {
      imagesSelected: getLocalStorageData(),
      thisImg: '',
      thatImg: '',
      opacity: 1
    } as ThisOrThatStates
  }

  componentDidMount() {
    this.getImages()
  }

  getImages() {
    axios.get<ResponseType>('https://randomfox.ca/floof/').then(res => {
      if (res.data && res.data.image) {
        this.setState({ ...this.state, thisImg: res.data.image, opacity: 1 })
      }
    })
    axios.get<ResponseType>('https://randomfox.ca/floof/').then(res => {
      if (res.data && res.data.image) {
        this.setState({ ...this.state, thatImg: res.data.image, opacity: 1 })
      }
    })
  }

  handleClick(imgToAdd: string) {
    this.setState(
      {
        ...this.state,
        imagesSelected: addNewImg(this.state.imagesSelected, imgToAdd),
        opacity: 0,
      }
    )
    localStorage.setItem('rank-data', JSON.stringify(this.state.imagesSelected))
    this.getImages()
  }

  render() {
    return (
      <>
        <div className="this-that-display">
          <Card style={{ ...styles, opacity: this.state.opacity }} buttonMessage="This fox!" handleClick={() => this.handleClick(this.state.thisImg)} imgUrl={this.state.thisImg} />
          <div className="this-that-or">OR</div>
          <Card style={{ ...styles, opacity: this.state.opacity }} buttonMessage="That fox!" handleClick={() => this.handleClick(this.state.thatImg)} imgUrl={this.state.thatImg} />
        </div>
        <Leaderboard leaderboardList={this.state.imagesSelected} />
      </>
    )
  }
}
export default ThisOrThatDisplay