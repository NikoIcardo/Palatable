import React, { Component } from 'react';

class AddRestaurant extends Component {
  render = () => (
    <div className="m-4">
      <form>
        <div className="form-row ">
          <div className="col-xs-12 col-sm mb-1">
            <input
              type="text"
              className="form-control"
              name=""
              placeholder="name"
              onChange=""
            />
          </div>
          <div className="col-xs-12 col-sm mb-1">
            <input
              type="text"
              className="form-control"
              name=""
              placeholder="location"
              onChange=""
            />
          </div>
          <div className="col-xs-12 col-sm mb-1">
            <select
              type="text"
              className="form-control mr-sm-2"
              name=""
              placeholder=""
              onChange="location"
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

export default AddRestaurant;
