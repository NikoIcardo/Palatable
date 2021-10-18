import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PalatableAPI from '../apis/PalatableAPI';
import Review from '../components/Review';
import StarRating from '../components/StarRating';
import AddReview from '../components/AddReview';

class RestaurantDetailPage extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      location: '',
      price_range: '',
      rating: 0,
      reviews: [],
    };
  }

  componentDidMount = async () => {
    try {
      const results = await PalatableAPI.get(`/${this.props.match.params.id}`);
      console.log(results);
      const { name, location, price_range } = results.data.data.restaurant;
      this.setState({
        name,
        location,
        price_range,
        reviews: results.data.data.reviews,
      });

      this.setState({
        rating: results.data.data.restaurant.average_rating,
      });
    } catch (err) {
      console.log(err);
    }
  };

  addReview = (review) => {
    this.setState({ reviews: [...this.state.reviews, review] });
  };

  render = () => (
    <div className="container-fluid">
      <div className="row jumbotron">
        <div className="col-10 offset-1">
          <h4 className="display-4">{this.state.location}</h4>
          <h2 className="mb-5 mx-0 display-1">{this.state.name}</h2>
          {this.state.rating ? (
            <StarRating rating={this.state.rating} />
          ) : (
            <p>No Reviews</p>
          )}
        </div>
      </div>
      <div className="row m-2">
        {this.state.reviews &&
          this.state.reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
      </div>
      <AddReview addReview={this.addReview} />
    </div>
  );
}

export default withRouter(RestaurantDetailPage);
