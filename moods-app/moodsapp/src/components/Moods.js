import React, { Component } from "react";
const getMood = () => {
  const moods = [
    "Angry",
    "Happy",
    "Sad",
    "Excited",
    "Depressed",
    "Overwhelmed",
  ];
  return moods[Math.floor(Math.random() * moods.length)];
};

class Moods extends Component {
  render() {
    return (
      <div>
        <h1>Moods</h1>
        <div>My mood currently is: {getMood()}</div>
      </div>
    );
  }
}

export default Moods;
