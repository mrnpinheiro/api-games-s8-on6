let gameModel = require('../models/gameModel');

const getGames = (request, response) =>{
  response.status(200).json(gameModel);
}

const returnGames = (request, response) =>{
  const {id} = request.params;
  const games = gameModel.find(games => games.id == id);
  response.status(200).json(games)
}

module.exports ={
  getGames,
  returnGames
}