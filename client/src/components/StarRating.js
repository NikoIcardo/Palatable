import React, { Component, Fragment } from 'react';

class StarRating extends Component {
  constructor(props) {
    super();
    this.state = {
      stars: [],
    };
  }
  componentDidMount = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= this.props.rating) {
        stars.push(<i className="fas fa-star" key={i}></i>);
      } else if (
        i === Math.ceil(this.props.rating) &&
        !Number.isInteger(this.props.rating)
      ) {
        stars.push(<i className="fas fa-star-half-alt" key={i}></i>);
      } else {
        stars.push(<i className="far fa-star" key={i}></i>);
      }
    }
    this.setState({ stars });
  };

  render = () => <Fragment>{this.state.stars}</Fragment>;
}

export default StarRating;
