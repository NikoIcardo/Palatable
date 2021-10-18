import React, { Component } from 'react';
import StarRating from './StarRating';

class Review extends Component {
  render = () => (
    <div className="col-4">
      <div
        className="card text-white bg-dark mb-3 mr-4"
        style={{ height: '100%' }}
      >
        <div className="card-header mb-0 d-flex justify-content-between">
          <span>{this.props.review.name + ' '}</span>
          <span>
            <StarRating
              rating={this.props.review.rating}
              key={this.props.review.id}
            />
          </span>
        </div>
        <div className="card-body mt-0">
          <p className="card-body">{this.props.review.review}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
