import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };
  state = {
    storeName: getFunName(),
  };

  goToStore = (event) => {
    event.preventDefault();
    this.props.history.push(`/store/${this.state.storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          value={this.state.storeName}
          onChange={(val) => this.setState({ storeName: val })}
          required
          placeholder="Store Name"
        />
        <button type="submit">Visit Store → </button>
      </form>
    );
  }
}

export default StorePicker;
