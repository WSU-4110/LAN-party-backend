'use strict';

// Imports
const AccountAPI = require("../services/AccountAPI");
const moment = require("moment-timezone");
const responseUtil = require("../utilities/response");
const { v4: uuidv4, stringify } = require('uuid');


module.exports = {

  // CREATE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Create: async function (event) {
      //Ensure that there was information in the event
      if(!event){
        return {
          statusCode: 204, //if nothing was provided in the request, return a 204 HTTPS code (No content)
          message: JSON.stringify("No information was provided with the request"),
        };
      };

      //Parse the event into a request
      let request = JSON.parse(event);

      //A party's name is valid if it has a number or letter.
      let nameChars = /'[0-9]*[A-Z]*[a-z]'/
      if (!request.name || !nameChars.test(request.name)){
        return {
          statusCode: 403, //Invalid name, return a 403 (Forbidden)
          message: JSON.stringify('Party must contain a name')
        };
      };

      //Ensure that the party has a location
      if(!request.location){
        return {
          statusCode: 403, //No location, return a 403 (Forbidden)
          message: JSON.stringify('Party must have a location')
        };
      };

      //Ensure that the party has a time
      if (!request.time){
        return {
          statusCode: 403, //No time, return a 403 (Forbidden)
          message: JSON.stringify('Party must have a time')
        }
      }
      

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