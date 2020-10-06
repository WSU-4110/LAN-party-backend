const axios = require('axios')
const bcrypt = require('bcryptjs')

class User {
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
    }

    constructor(email, password) {
        this.email = email;
        this.updatePassword(password);
        this.steamKey = null;
        this.gogKey = null;
        this.discordKey = null;
    }
}



function createAccount() {
    var newUser = new User('gj3842@wayne.edu', 'P4ssword!')
            
    //Put the new account into the server
    axios.post('http://localHost:3001/profile', newUser)
        .then(console.log('finished!'));

};

createAccount();
