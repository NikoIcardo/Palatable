import React, { Component } from 'react';

class RestaurantRow extends Component {
  render = () => (
    <tr>
      <th scope="row">{this.props.restaurant.name}</th>
      <td>{this.props.restaurant.location}</td>
      <td>{this.props.restaurant.price_range}</td>
      <td>@mdo</td>
      <td>
        <button className="btn btn-warning">Edit</button>
      </td>
      <td>
        <button className="btn btn-danger">Edit</button>
      </td>
    </tr>
  );
}

export default RestaurantRow;
