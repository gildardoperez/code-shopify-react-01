import React, {Component} from 'react';

import styles from './Button.css.js';

class Button extends Component {
    render() {
        return(
            <button style={styles.button}>
                {this.props.text}
            </button>
        )
    }
}

export default Button