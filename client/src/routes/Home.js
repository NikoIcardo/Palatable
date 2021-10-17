import React, { Component } from 'react';

import Header from '../components/Header';
import AddRestaurant from '../components/AddRestaurant';
import RestaurantList from '../components/RestaurantList';

class Home extends Component {
  render = () => (
    <div>
      <Header />
      <div className="container">
        <AddRestaurant />
        <RestaurantList />
      </div>
    </div>
  );
}

export default Home;
