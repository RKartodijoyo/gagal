import React, { PureComponent } from "react";

class Page extends PureComponent {
  state = {
    adder: 0
  };
  _add = () => {
    fetch(`https://api.punkapi.com/v2/beers?taco`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });
    setTimeout(() => {}, 5000);
    this.setState({
      adder: this.state.adder + 1
    });
  };
  _decrement = () => {
    fetch(`https://api.punkapi.com/v2/beers?taco`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(() => {}, 5000);

    this.setState({
      adder: this.state.adder - 1
    });
  };
  render() {
    return (
      <div>
        <h6>This number is magical ... {this.state.adder}</h6>
        <button onClick={this._add}>Increase the Adder</button>
        <button onClick={this._decrement}>Decrease the Adder</button>
      </div>
    );
  }
}
export default Page;
