import React, { Component } from "react";
const getNum = () => {
  return Math.floor(Math.random() * 10);
};
class NumPicker extends Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your num is...{num}</h1>
        <p>{num === 7 ? "YOU WON!!!" : "TRY AGAIN!"}</p>
        {num === 7 ? (
          <img
            alt="kip"
            src="https://media3.giphy.com/media/3o7aDfEAl370Fbgu40/giphy.gif?cid=ecf05e47m40dj43rnp8ldbrhzuz6v06mh5856xtbpdik8tgr&rid=giphy.gif&ct=g"
          />
        ) : (
          <img
            alt="badmuthafucka"
            src="https://media4.giphy.com/media/C5k3MVxuDrFlFVMxpA/giphy.gif?cid=ecf05e47xqvp931fmn7e7wz77iazthvev66ljpjhlmv5kg0h&rid=giphy.gif&ct=g"
          />
        )}
      </div>
    );
  }
}
export default NumPicker;
