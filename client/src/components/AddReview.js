import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PalatableAPI from '../apis/PalatableAPI';

class AddReview extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      review: '',
      rating: 'Your Rating',
    };
  }

  addReview = async (e) => {
    e.preventDefault();
    const review = await PalatableAPI.post('/reviews', {
      restaurant_id: this.props.match.params.id,
      ...this.state,
    });
    this.props.addReview(review.data.data);
    this.setState({
      name: '',
      review: '',
      rating: 'Your Rating',
    });
    this.props.history.push(`/restaurants/${this.props.match.params.id}`);
  };

  render = () => (
    <div className="row">
      <div className="col mt-5">
        <h3>Add Your Review</h3>
        <hr />
        <form onSubmit={this.addReview}>
          <div className="form-row">
            <div className="col-xs-12 col-sm-3 mb-4">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-5 mr-2">
              <textarea
                className="form-control mb-4"
                rows="5"
                name="review"
                placeholder="Your Review"
                value={this.state.review}
                onChange={(e) => this.setState({ review: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-4 mb-1">
              <select
                type="text"
                className="form-control mr-sm-2 mb-4"
                value={this.state.rating}
                onChange={(e) => this.setState({ rating: e.target.value })}
              >
                <option disabled>Your Rating</option>
                <option value="1">*</option>
                <option value="2">**</option>
                <option value="3">***</option>
                <option value="4">****</option>
                <option value="5">*****</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-dark mb-4">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(AddReview);
