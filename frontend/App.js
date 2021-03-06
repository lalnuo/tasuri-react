import React, { Component } from 'react';
import { PurchaseList } from './components/purchase_list'
import { PurchaseForm } from './components/purchase_form'
import { BalanceList } from './components/balance_list'
import { connect } from 'react-redux'

export default class App extends Component {
  render() {
    const { users, dispatch, purchases } = this.props;
    return (
      <div class="pure-g">
        <div className="container-div pure-u-5-5">
          <BalanceList users={users}/>
          <PurchaseForm dispatch={dispatch} users={users}/>
          <PurchaseList dispatch={dispatch} users={users} purchases={purchases}/>
        </div>
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
