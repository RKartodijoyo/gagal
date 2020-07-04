export function incrementAction() {
  return async dispatch => {
    fetch(`https://api.punkapi.com/v2/beers?taco`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(() => {}, 1000);
  };
}
export function decreaseAction() {
  return async dispatch => {
    fetch(`https://api.punkapi.com/v2/beers?taco`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });
    setTimeout(() => {}, 1000);
  };
}
