import React, { Component, createContext } from 'react';

const RestaurantContext = createContext();

export class RestaurantProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  setRestaurants = (newRestaurants = ['']) => {
    this.setState({ restaurants: newRestaurants });
  };

  render = () => (
    <RestaurantContext.Provider
      value={{
        restaurants: this.state.restaurants,
        setRestaurants: this.setRestaurants,
      }}
    >
      {this.props.children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContext;
