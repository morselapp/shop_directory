import React, {
  Component
} from 'react';

class ShopItem extends Component {
  render() {
    return (
<div className="shop-container">
      <div className ="shop">
        <div className="shop-photo">
          <img height = "150" width = "150" src = "http://www.thehindu.com/news/national/article17529553.ece/alternates/FREE_300/19THYOGI" / >
        </div>
        <div className="shop-detail">
          <div><strong > {this.props.shop.shopName} </strong></div >

          <div> { this.props.shop.mobile} </div>

          <div className="shop-description"> { this.props.shop.description} </div>

          <div> { this.props.shop.homeDelivery} </div>
          <div> { this.props.shop.shopType } </div >

          <div className="shop-address"> { this.props.shop.address} {this.props.shop.landmark} { this.props.shop.area }</div>

          <div>{ this.props.shop.alternateMobile} { this.props.shop.thirdContact} </div>

        </div>
      </div>
</div>
);
}
}

ShopItem.propTypes = {
  shop: React.PropTypes.object
}

export default ShopItem;
