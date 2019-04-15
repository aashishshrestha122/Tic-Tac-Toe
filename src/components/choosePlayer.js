import React, { Component } from "react";
import "../App.css";
class Player extends Component {


  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value)
  }
  render() {
    return (
      <form onSubmit={(e)=> this.handleForm(e)}>
        <label className="radioStyle">
          Player X
          <input type="radio" name="player" value="X" />
          <span className="circle"></span>
        </label>
        <label className="radioStyle">
          Player O
          <input type="radio" name="player" value="O" />
          <span className="circle"></span>
        </label>
        <input type="submit" value="START" id="submitButton" />
      </form>
    );
  }
}

export default Player;
