'use strict'

const tableName = 'PARTIES-LAN';
const shortid = require("shortid");
const AWS = require("aws-sdk");

AWS.config.update({region: 'us-east-2'});

module.exports = {
    Save: async function(ID, PartyInfo) {
        try {
            let dynamoDB = new AWS.DynamoDB.DocumentClient();

            let newParty = PartyInfo;

            //Ensure that the party has an ID
            if(!ID){
                ID = shortid.generate();
            }
            newParty.ID = ID;

            //Create the parameters for putting into the table
            let params = {
                TableName: tableName,
                Item: newParty
            };

            //Put it into the table
            await dynamoDB.put(params).promise();
            //Return the party that was inserted.
            return newParty;

        } catch (err) { 
            console.log(err);
            throw err;
        }
    }
};