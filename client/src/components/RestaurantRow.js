import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RestaurantContext from '../context/RestaurantsContext';
import PalatableAPI from '../apis/PalatableAPI';

class RestaurantRow extends Component {
  onDelete = async () => {
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

  onEdit = () => {
    this.props.history.push(`/restaurants/${this.props.restaurant.id}/update`);
  };

  render = () => (
    <tr>
      <th scope="row">{this.props.restaurant.name}</th>
      <td>{this.props.restaurant.location}</td>
      <td>{'$'.repeat(this.props.restaurant.price_range)}</td>
      <td>Ratings</td>
      <td>
        <button className="btn btn-warning" onClick={this.onEdit}>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={this.onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

RestaurantRow.contextType = RestaurantContext;

export default withRouter(RestaurantRow);
