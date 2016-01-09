import React, { Component } from 'react';
import { sendPurchase } from '../actions/actions';

export class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    }
  }

  updateField(field, event) {
    let stateObject = {};
    stateObject[field] = event.target.value;
    this.setState(stateObject);
  }

  createPurchase(event) {
    event.preventDefault();
    let purchase = {
      name: this.state.name,
      price: this.state.price,
      userId: parseInt(this.state.userId)
    };
    this.setState({name: '', price: 0})
    this.props.dispatch(sendPurchase(purchase));
  }

  render() {
    const { users } = this.props;
    if (!this.state.userId) {
      this.state.userId = users.first() ? users.first().get('id') : null;
    }
    const options = users.map(user => {
      return <option value={user.get('id')} key={user.get('id')}>{user.get('name')}</option>
    });
    return (
      <form className="pure-form pure-form-stacked">
        <fieldset className="pure-group">
        <label>Ostaja</label>
        <select
          value={this.state.userId}
          onChange={this.updateField.bind(this, 'userId')}>
          {options}
        </select>
        <label>Tuotteen nimi</label>
        <input
          value={this.state.name}
          onChange={this.updateField.bind(this, 'name')}
          placeholder="Tuotteen nimi"
          type="text">
        </input>
        <label>Hinta</label>
        <input
          value={this.state.price}
          onChange={this.updateField.bind(this, 'price')}
          type="number"
          placeholder="Hinta"
          ></input>
        <button
          className="button-success pure-button"
          onClick={this.createPurchase.bind(this)}>
          Lisää
        </button>
        </fieldset>
      </form>
    );
  }
}
