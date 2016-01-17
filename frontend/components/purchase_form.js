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

  createPurchase(double, event) {
    event.preventDefault();
    let purchase = {
      name: this.state.name,
      price: double ? 2 * this.state.price : this.state.price,
      userId: parseFloat(this.state.userId)
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
      <div>
      <h4>Lisää tuote</h4>
        <form className="purchase-form pure-form">
          <select
            className="purchase-form-field"
            value={this.state.userId}
            onChange={this.updateField.bind(this, 'userId')}>
            {options}
          </select>
          <input
            className="purchase-form-field"
            value={this.state.name}
            onChange={this.updateField.bind(this, 'name')}
            placeholder="Tuotteen nimi"
            type="text"
            required
            >
          </input>
          <input
            className="purchase-form-field"
            value={this.state.price}
            onChange={this.updateField.bind(this, 'price')}
            type="number"
            step="any"
            placeholder="Hinta"
            required
            ></input>
          <button
            className="purchase-form-button button-success pure-button"
            onClick={this.createPurchase.bind(this, false)}>
            Lisää
          </button>

          <button
            className="purchase-form-button button-success pure-button"
            onClick={this.createPurchase.bind(this, true)}>
            Lisää tuplana
          </button>
        </form>
      </div>
    );
  }
}
