import React, { Component } from 'react';
import RestaurantContext from '../context/RestaurantsContext';
import PalatableAPI from '../apis/PalatableAPI';

class AddRestaurant extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      location: '',
      price_range: 'Price Range',
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await PalatableAPI.post('/', this.state);
      console.log(result);
      this.context.setRestaurants([
        ...this.context.restaurants,
        result.data.data,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  render = () => (
    <div className="m-4">
      <form onSubmit={this.submitHandler}>
        <div className="form-row ">
          <div className="col-xs-12 col-sm mb-1">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="col-xs-12 col-sm mb-1">
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="location"
              value={this.state.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </div>
          <div className="col-xs-12 col-sm mb-1">
            <select
              type="text"
              className="form-control mr-sm-2"
              value={this.state.price_range}
              onChange={(e) => this.setState({ price_range: e.target.value })}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" className="btn btn-dark">
            Add New Restaurant
          </button>
        </div>
      </form>
    </div>
  );
}

AddRestaurant.contextType = RestaurantContext;

export default AddRestaurant;
