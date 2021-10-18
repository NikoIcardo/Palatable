import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PalatableAPI from '../apis/PalatableAPI';

class RestaurantDetailPage extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      location: '',
      price_range: '',
    };
  }

  componentDidMount = async () => {
    try {
      const results = await PalatableAPI.get(`/${this.props.match.params.id}`);
      const { name, location, price_range } = results.data.data;
      this.setState({ name, location, price_range });
    } catch (err) {
      console.log(err);
    }
  };

  render = () => (
    <div className="container-fluid">
      <div className="row jumbotron">
        <div className="col-10 offset-1">
          <h4 className="display-4">{this.state.location}</h4>
          <h2 className="mb-5 display-1">{this.state.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RestaurantDetailPage);
