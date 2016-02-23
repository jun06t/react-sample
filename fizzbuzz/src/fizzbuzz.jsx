import React from "react";
import ReactDom from "react-dom";

class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      display: 0
    };
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    var n = this.state.count + 1;
    this.setState({
      count: n,
      display: this.display(n)
    });
  }

  display(n) {
    if (n % 15 === 0) {
      return 'FizzBuzz';
    }
    if (n % 3 === 0) {
      return 'Fizz';
    }
    if (n % 5 === 0) {
      return 'Buzz';
    }
    return n
  }

  render() {
    return (
      <h1>{this.state.display}</h1>
    );
  }
}

ReactDom.render(
  <FizzBuzz />,
  document.getElementById("fizzbuzz")
);