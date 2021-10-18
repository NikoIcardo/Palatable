import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PalatableAPI from '../apis/PalatableAPI';
import RestaurantContext from '../context/RestaurantsContext';

class UpdateRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      price_range: 'Price Range',
    };
  }

  componentDidMount = async () => {
    try {
      const response = await PalatableAPI.get(
        `/api/v1/restaurants/${this.props.match.params.id}`
      );
      console.log(response);
      const { name, location, price_range } = response.data.data.restaurant;
      this.setState({ name, location, price_range });
    } catch (err) {
      console.log(err);
    }
  };

  update = async (e) => {
    e.preventDefault();
    try {
      await PalatableAPI.put(
        `/api/v1/restaurants/${this.props.match.params.id}`,
        this.state
      );
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  render = () => (
    <div className="container-fluid mt-5 ">
      <div className="row jumbotron">
        <div className="col-10 offset-1">
          <h2 className="mb-5 display-1">Update Restaurant</h2>
        </div>
      </div>
      <div className="row text-big">
        <div className="col-8 offset-2">
          <form onSubmit={this.update}>
            <input
              type="text"
              name="name"
              className="form-control my-4 input"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              name="location"
              className="form-control my-4 input-"
              placeholder="Location"
              value={this.state.location}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <select
              type="text"
              className="form-control my-4 input mr-sm-2"
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
            <button type="submit" className="btn btn-block btn-dark">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

UpdateRestaurant.contextType = RestaurantContext;

export default withRouter(UpdateRestaurant);
