import React from "react";



export class Exercisetwo extends React.Component {
  render() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!";
    return (
      <div>
        <div>{data[0] + " " + data[1]}</div> <br/>
        <div>{number1 + number2}</div> <br />
        <div>{`The string's length is: ${string.length}`}</div>
      </div>
    );
  }
}






