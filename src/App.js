import React, {
  Component
} from 'react';
import Projects from './Components/Projects';
import './App.css';
import $ from 'jquery';
import Todos from './Components/Todos';
import Shops from './Components/Shops';
import config  from './config.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  getShops() {
    $.ajax({
      url: 'http://192.168.1.5:4000/api/shop/search/hoodi',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          shops: data
        }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }
   getShops1(searchString) {
     $.ajax({
       url: config.url.concat('/api/shop/search/').concat(searchString),
       dataType: 'json',
       cache: false,
       success: function(data) {
         this.setState({
           shops: data
         }, function() {
           console.log(this.state);
         });
       }.bind(this),
       error: function(xhr, status, err) {
         console.log(err);
       }
     });
   }
  componentWillMount() {
    var origin  = window.location.origin;
    var searchString = window.location.href.replace(origin,"");
    searchString = searchString.replace("/","");
    //this.getShops();
   //console.log(searchString);
    this.getShops1(searchString);
  }
  componentDidMount() {
    // this.getTodos();
  }
  render() {
    return( < div className = "App" > < Shops shops = {
        this.state.shops
      }
      /> < /
      div > );
  }
}
export default App;
