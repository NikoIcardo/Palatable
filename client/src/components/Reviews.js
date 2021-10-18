import React, { Component } from 'react';
import StarRating from './StarRating';

class Reviews extends Component {
  render = () => (
    <div className="row row-cols-3 m-2">
      <div
        className="card text-white bg-dark mb-3 mr-4"
        style={{ maxwidth: '30%' }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-body">This restaurant was alright.</p>
        </div>
      </div>

      <div
        className="card text-white bg-dark mb-3 mr-4"
        style={{ maxwidth: '30%' }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-body">This restaurant was alright.</p>
        </div>
      </div>

      <div
        className="card text-white bg-dark mb-3 mr-4"
        style={{ maxwidth: '30%' }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-body">This restaurant was alright.</p>
        </div>
      </div>

      <div
        className="card text-white bg-dark mb-3 mr-4"
        style={{ maxwidth: '30%' }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-body">This restaurant was alright.</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
