const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

class Party {
    updateName(newName) {
        if (newName === null || newName === '') {
            throw "Must have a name";
        }
        this.name = newName;
        console.log(this.name);
    }

    updateLocation(newLocation) {
        //Uncomment when we can get window info from frontend 

        //if (newLocation === null) {
        //    throw "Party must have a location";
        //}
        this.location = newLocation
        console.log(this.location);
    }

    updateGames(newGames) {
        if (newGames === null) {
            throw "Party must have games"
        }
        this.games = newGames;
        console.log(this.games);
    }

    constructor(name, host, games, location) {
        this.updateName(name);
        this.host = host;
        this.updateGames(games);
        this.updateLocation(location);
        this.id = uuidv4();
        console.log(this.id);
    }
}

var myParty = new Party('gaem', 'me', ['Don starrv', 'Kingdome herts'], 'home');
console.log(myParty);
axios.post('http://localHost:3001/profile', myParty) //Window.navigator.geolocation.getCurrentPosition()))    Can't get until frontend is done
    .then(console.log('finished!'));