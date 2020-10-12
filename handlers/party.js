'use strict';

// Imports
const PartyAPI = require("../services/PartyAPI");
const moment = require("moment-timezone");
const responseUtil = require("../utilities/response");
const { v4: uuidv4, stringify } = require('uuid');


module.exports = {

  // CREATE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Create: async function (event) {
      //Ensure that there was information in the event
      if(!event){
        return responseUtil.Build(204, 'Event is empty');
      };

      //Parse the event into a request
      let request = JSON.parse(event);

      //A party's name is valid if it has a number or letter.
      let nameChars = /'[0-9]*[A-Z]*[a-z]'/
      if (!request.name || !nameChars.test(request.name)){
        return responseUtil.Build(403, 'Party must have a name with letters or numbers');
      };

      //Ensure that the party has a location
      if(!request.location){
        return responseUtil.Build(403, 'Party must have a location');
      };

      //Ensure that the party has a time
      if (!request.time){
        return responseUtil.Build(403, 'Party must have a time');
      };

      //Insert the item into the table
      
      

  },
    
  // UPDATE A PARTY //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Update: async function (event) {

  },

  // GET A PARTY BY AN ID //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Get: async function (event) {

  },

  // GET ALL OF THE PARTIES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  GetAll: async function (event) {

  }
};
