import React, { Component, createContext } from 'react';

export const RestaurantContext = createContext();

class RestaurantContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  setRestaurants = (newRestaurants) => {
    this.setState({ restaurants: newRestaurants });
  };

  render = () => (
    <RestaurantContext.Provider
      value={{
        restaurants: this.state.restaurants,
      }}
    >
      {this.props.children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContextProvider;
