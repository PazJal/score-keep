import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker';

import {Players , calculatePlayerPositions} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';
import App from './../imports/ui/App';

Meteor.startup(() => {
  
  //Will run every time the players query yields different results. 
  Tracker.autorun(() => {
    let players = Players.find({},{sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    const title = 'Score Keep';  
    //It will not stack up? every time it will completly clear the innerHTML for app? 
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });  
});