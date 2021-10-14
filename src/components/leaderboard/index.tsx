import { Component } from 'react'
import LeaderboardType from '../../types/LeaderBoardType'
import './styles.css'

class Leaderboard extends Component<LeaderboardType> {
    render() {
        return (
            <div className="leaderboard-wrapper">
                <h2>Leaderboard</h2>
                {this.props.leaderboardList.filter((_item, index) => index <= 9).map(item => {
                    return (
                        <div className="leaderboard-card">
                            <img src={item.img} />
                            <span>Pontuação: {item.occurences}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Leaderboard