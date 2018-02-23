import React, {Component} from 'react';
import styles from './Product.css.js';

import Button from '../button/Button.js';

class Product extends Component {

    render(){
        return(
            <div style={styles.block}>
                <img src={this.props.img} alt="" style={styles.image}/>
                <h2>{this.props.title}</h2>
                <p>this is the description</p>
                <Button text="Shop - $28.50"/>
            </div>
        )
    }
}

export default Product;