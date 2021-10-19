import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RestaurantContext from '../context/RestaurantsContext';
import PalatableAPI from '../apis/PalatableAPI';
import StarRating from './StarRating';

class RestaurantRow extends Component {
  onDelete = async (e) => {
    e.stopPropagation();
    try {
      await PalatableAPI.delete(`/${this.props.restaurant.id}`);
      this.context.setRestaurants(
        this.context.restaurants.filter(
          (restaurant) => restaurant.id !== this.props.restaurant.id
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  onEdit = (e) => {
    e.stopPropagation();
    this.props.history.push(`/restaurants/${this.props.restaurant.id}/update`);
  };

  details = () => {
    this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
  };

  render = () => (
    <tr onClick={this.details}>
      <th scope="row">{this.props.restaurant.name}</th>
      <td>{this.props.restaurant.location}</td>
      <td>{'$'.repeat(this.props.restaurant.price_range)}</td>
      <td>
        <StarRating rating={this.props.restaurant.average_rating} /> (
        {this.props.restaurant.count ? this.props.restaurant.count : 0})
      </td>
      <td>
        <button className="btn btn-warning" onClick={(e) => this.onEdit(e)}>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={(e) => this.onDelete(e)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

RestaurantRow.contextType = RestaurantContext;

export default withRouter(RestaurantRow);
