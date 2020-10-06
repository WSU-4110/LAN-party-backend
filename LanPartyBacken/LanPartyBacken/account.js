import axios from 'axios'
import bcrypt from 'bcryptjs'

class User {
    updatePassword(password) {

        //For now, lets assume that any password that isn't empty is good.
        if (password === null || password === "") {
            throw 'Invalid password';
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
    }
}

////Fetch the info
//const fetchInfo = axios.get('http://localHost:3001/comments')
//    .then(comments => { //If the request is made
//        //Display comments in the console
//        console.log(comments.data);
//    });



function createAccount() {
    var newUser = new User('gj3842@wayne.edu', 'p4ssw0rd!')
            
    //Put the new account into the server
    axios.post('http://localHost:3001/profile', newUser)
        .then(console.log('finished!'));

};

createAccount();