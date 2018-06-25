//Problem: We need a simple way to look at a user's badge to count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//Connect to the API URL (https://teamtreehouse.com/username_here.json)
//Read the data
//Parse the data
//Print the data

//Require https module
const https = require('https');
const http = require('http');
const print = require('./print');

function get(username, skill) {
  try {
  //Connect to the API URL
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if(response.statusCode === 200) {
        let body = '';
        //Read the data
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try{
            //Parse the data
            const profile = JSON.parse(body);
            //Print the data
            const availableSkills = Object.keys(profile.points);
            if(availableSkills.includes(skill)) {
              print.printMessage(username, profile.badges.length, profile.points[skill], skill);
            } else {
              console.error(`${skill} does not exist as a skill in this API, please enter a valid skill`);
            }
          } catch (error) {
            print.printError(error);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        print.printError(statusCodeError);
      }
    });
  } catch (error) {
    print.printError(error);
  }
};

module.exports.get = get;
