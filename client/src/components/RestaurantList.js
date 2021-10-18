import React, { Component } from 'react';
import PalatableAPI from '../apis/PalatableAPI';

import RestaurantContext from '../context/RestaurantsContext';
import RestaurantRow from './RestaurantRow';

class RestaurantList extends Component {
  componentDidMount = async () => {
    try {
      const results = await PalatableAPI.get('/');
      console.log(results);
      this.context.setRestaurants(results.data.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  render = () => (
    <div className="row">
      <div className="col mx-2 p-4 text-center">
        <table className="table table-dark table-hover">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Restaurant</th>
              <th scope="col">Location</th>
              <th scope="col">Price Range</th>
              <th scope="col">Ratings</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.context.restaurants.length > 0 &&
              this.context.restaurants.map((restaurant) => (
                <RestaurantRow restaurant={restaurant} key={restaurant.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

RestaurantList.contextType = RestaurantContext;

export default RestaurantList;
