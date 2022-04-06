import react from 'react'
import './components.css'
import { Table } from 'react-bootstrap'

class PlayerComponent extends react.Component {
    constructor(props){
        super(props)
        this.state = {
            players:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/player")
        .then(res => res.json())
        .then(json => {
            this.setState({
                players: json
            })
        });
    }

    render (){
        return (
            <div>
                <br/>
                <h1 className='text-center'> Players </h1>
                <br/>
                <Table striped hover>
                    <thead>
                        <tr>
                            <td> PlayerID </td>
                            <td> Name </td>
                            <td> Club </td>
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
                                    <td> {player.club.clubName} </td>
                                    <td> {player.position.positionName} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PlayerComponent