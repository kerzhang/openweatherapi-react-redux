import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  // 'event' here is very important.
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form className='my-3' onSubmit={this.onFormSubmit}>
        <div className="form-row">
          <div className="col-9">
            <input 
              className="form-control"
              placeholder='Input a city'
              value = {this.state.term}
              onChange={this.onInputChange}
              />
          </div>
          <div className="col">
            <button className="btn btn-primary" type="submit">
              查 询
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapStateToProps)(SearchBar);
