import React, {
  Component
} from 'react';
import ShopItem from './ShopItem';

class Shops extends Component {
  render() {
    let shopItems;
    if (this.props.shops) {
      shopItems = this.props.shops.map(shop => {
        //console.log(project);
        return ( <
          ShopItem key = {
            shop.shopName
          }
          shop = {
            shop
          }
          />
        );
      });
    }
    return ( <
      div className = "Shops" >
      <
      h3 > Shop List < /h3> {
      shopItems
    } < /div>
  );
}
}

Shops.propTypes = {
  shops: React.PropTypes.array
}

export default Shops;
