import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Product from './components/product/Product.js';

class App extends Component {
  render() {
    // waiting for the shop data
    if (this.props.shopData && this.props.shopData.loading) {
      return <div>Loading 🥑</div>
    }

    // error retrieving shop data
    if (this.props.shopData && this.props.shopData.error) {
      return <div>Sorry something went wrong. Check back soon :)</div>
    }

    // display products
    const productsToDisplay = this.props.shopData.shop.products
    return (
      <div className="App">
        <div>

          {productsToDisplay.edges.map((el, i)=> {
            return(
              <Product key={i} title={el.node.title} img={el.node.images.edges[0].node.src}/>
            )
          })}
        </div>
      </div>
    );
  }
}


const HOME_QUERY = gql`
  query ShopData {
    shop {
      name
      description
      products(first:20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

// export default App;
export default graphql(HOME_QUERY, {name: 'shopData'})(App);
