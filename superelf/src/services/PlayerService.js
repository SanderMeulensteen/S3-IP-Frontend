import axios from 'axios'

const playersRestApi = 'http://localhost:8080/api/player';

class PlayerService {
    getPlayers(){
        return axios.get(playersRestApi);
    }

}

export default new PlayerService();