import React, { Component } from 'react';
import { UserSelect } from './components/user_select'
import { ProductList } from './components/product_list'
import { connect } from 'react-redux'

export default class App extends Component {
  render() {
    const { users, products } = this.props
    return (<div><UserSelect users={users}/></div>
    );
  }
}



function mapStateToProps(state) {
  return { users: state.get('users') };
}

export default connect(mapStateToProps)(App)
