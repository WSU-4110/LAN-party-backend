'use strict';

// Imports
const PartyAPI = require("../Services/PartyAPI.js");
const responseUtil = require("../utilities/response.js");
const shortid = require("shortid");


module.exports = {

  // CREATE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Create: async function (event) {
      //Ensure that there was information in the event
      if(!event){
        return responseUtil.Build(204, 'Event is empty');
      };

      let request = JSON.parse(event.body);
      //A party's name is valid if it has a number or letter.
      const nameChars = /\w/;

      if (typeof request.name === undefined || !nameChars.test(request.name)){
        return responseUtil.Build(403, 'Party must have a name with letters or numbers');
      };

      //Ensure that the party has a location
      if(typeof request.location === undefined){
        return responseUtil.Build(403, 'Party must have a location');
      };

      //Ensure that the party has a time
      if (typeof request.time === undefined){
        return responseUtil.Build(403, 'Party must have a time');
      };
      
      let response = await PartyAPI.Save(shortid.generate(), request);

      response.message = 'Created!';
      return responseUtil.Build(200, response);

  },
    
  // UPDATE A PARTY //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Update: async function (events) {

  },

  // GET A PARTY BY AN ID //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Get: async function (events) {

  },

  // GET ALL OF THE PARTIES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  GetAll: async function (events) {

  }
};
