import React, {
  Component
} from 'react';

class ShopItem extends Component {
  render() {
    return ( <
      li className = "Shop" >
      <
      div >
      <
      strong > {
        this.props.shop.shopName
      } < /strong>  </div > < div > {
        this.props.shop.shopType
      } < /div>  <div> {
      this.props.shop.area
    } < /div>  <div> {
    this.props.shop.description
  } < /div>  <div> {
  this.props.shop.landmark
} < /div> < /
li >
);
}
}

ShopItem.propTypes = {
  shop: React.PropTypes.object
}

export default ShopItem;
