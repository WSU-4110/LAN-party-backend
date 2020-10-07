const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const { create } = require('json-server');

let User = {
    updatePassword(password) {

        //Regex for numbers, uppercase and lowercase letters
        const REQUIRED_CHARACTERS = /[0-9]*[A-Z]*[a-z]/

        //If the password isn't long enough or has no numbers or uppercase letters
        if (password.length < 8 || !password.match(REQUIRED_CHARACTERS)) {
            throw 'Invalid password. Must use at least 8 characters and have a number, uppercase, and lowercase letters';
        } else {
            //Update the salt
            this.salt = bcrypt.genSaltSync();

            //Update the password
            this.password = bcrypt.hashSync(password, this.salt);
        }
    },

    
    generateCookie(){
        this.cookie = 'hallo';
    },
    

    User(email, password){
        newUser = User;
        //Check that the email 
        newUser.email = email;
        newUser.updatePassword(password);
        newUser.steamKey = null;
        newUser.gogKey = null;
        newUser.discordKey = null;
        newUser.id = uuidv4();
        newUser.generateCookie();
        return newUser;
    }
}



function createAccount(email, password) {
    var newUser = User.User(email, password);
            
    //Put the new account into the server
    axios.post('http://localHost:3001/profile', newUser)
        .then(console.log('finished!'))
        .catch('Cannot create a new account. Sorry!');

};

createAccount('gj3842@wayne.edu', 'P4ssw0rd!')
