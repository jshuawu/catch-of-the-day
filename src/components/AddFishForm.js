import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      status: '',
      desc: '',
      image: '',
    };
  }

  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.state.name,
      price: this.state.price,
      status: this.state.status,
      desc: this.state.desc,
      image: this.state.image,
    };
    this.props.addFish(fish);
  };
  render() {
    const { name, price, status, desc, image } = this.state;

    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          onChange={(e) => this.setState({ price: e.target.value })}
          value={price}
          type="text"
          placeholder="Price"
        />

        <select
          name="status"
          onChange={(e) => {
            this.setState({ status: e.target.value });
          }}
          value={status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>

        <textarea
          name="desc"
          onChange={(e) => this.setState({ desc: e.target.value })}
          value={desc}
          placeholder="Desc"
        />
        <input
          name="image"
          onChange={(e) => this.setState({ image: e.target.value })}
          value={image}
          type="text"
          placeholder="Image"
        />
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

AddFishForm.propTypes = {
  addFish: PropTypes.func,
};

export default AddFishForm;
