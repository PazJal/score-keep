import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import propTypes from 'prop-types'




export default class App extends React.Component {
  render(){
    return (
      <div>
        <TitleBar title={this.props.title} subTitle='Test subtitle'/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
        
      </div>
    );
  }
}


App.propTypes = {
  title: propTypes.string.isRequired,
  players: propTypes.array.isRequired
}