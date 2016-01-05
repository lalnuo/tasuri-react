import React, { Component } from 'react';
import { PurchaseList } from './components/purchase_list'
import { PurchaseForm } from './components/purchase_form'
import { connect } from 'react-redux'

export default class App extends Component {
  render() {
    const { users, products, dispatch, purchases } = this.props;
    return (
      <div>
        <PurchaseForm dispatch={dispatch} users={users}/>
        <PurchaseList purchases={purchases}/>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    users: state.get('users'),
    purchases: state.get('purchases')
  };
}

export default connect(mapStateToProps)(App)
