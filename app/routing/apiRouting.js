var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

  app.get('/api/friends', function(req, res){
    res.json(friendsData);
  });
  
  app.post('/api/friends', function(req, res){
    friendsData.push(req.body);

  });

  app.post('/api/clear', function(req, res){

    friendsData = [];

    console.log(tableData);
  })
}