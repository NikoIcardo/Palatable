import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdateRestaurant from './routes/UpdateRestaurant';
import RestaurantContextProvider from './context/RestaurantsContext';

class App extends Component {
  render = () => (
    <RestaurantContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Restaurants/:id/update"
            component={UpdateRestaurant}
          />
          <Route
            exact
            path="/restaurants/:id"
            component={RestaurantDetailPage}
          />
        </Switch>
      </Router>
    </RestaurantContextProvider>
  );
}

export default App;
