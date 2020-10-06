const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

class Party {
    updateName(newName) {
        //Make sure that the name isn't empty
        if (newName === null || newName === '') {
            throw "Must have a name";
        }
        this.name = newName;
    }

    updateLocation(newLocation) {
        //Uncomment when we can get window info from frontend 

        //if (newLocation === null) {
        //    throw "Party must have a location";
        //}
        this.location = newLocation
    }

    updateGames(newGames) {
        //Make sure that the games aren't empty
        if (newGames === null) {
            throw "Party must have games"
        }
        this.games = newGames;
    }

    constructor(name, host, games, location) {
        this.updateName(name);
        this.host = host;
        this.updateGames(games);
        this.updateLocation(location);
        this.id = uuidv4();
    }
}

var myParty = new Party('gaem', 'me', ['Don starrv', 'Kingdome herts'], 'home');
axios.post('http://localHost:3001/profile', myParty) //Window.navigator.geolocation.getCurrentPosition()))    Can't get until frontend is done
    .then(console.log('finished!'));