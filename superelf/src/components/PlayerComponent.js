import react from 'react'
import PlayerService from '../services/PlayerService'

class PlayerComponent extends react.Component {

    constructor(){
        super(props)
        this.state = {
            players:[]
        }
    }

    componentDidMount(){
        PlayerService.getPlayers().then((response) => {
            this.setState({
                players: response.data
            })
        });
    }

    render (){
        return (
            <div>
                <h1 className='text-center'> Players </h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td> PlayerID </td>
                            <td> Name </td>
                            <td> ClubID </td>
                            <td> Position </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.players.map(
                                player =>
                                <tr key = {player.id}>
                                    <td> {player.id} </td>
                                    <td> {player.name} </td>
                                    <td> {player.club_id} </td>
                                    <td> {player.position} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PlayerComponent