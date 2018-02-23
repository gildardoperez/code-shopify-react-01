import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import Product from '../components/product/Product.js';
import Button  from '../components/button/Button.js';

// import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
  .add('Product Button', () => (
    <Button
      text={text("Button Text", "Shop Now")}
    />
  ))

storiesOf('Product', module)
  .addDecorator(withKnobs)
  .add('Home Page Product', () => (
    <Product
      title={text("Title", "Product One")}
      img={text("Image Source", "http://www.fillmurray.com/240/300")}
    />
  ))

