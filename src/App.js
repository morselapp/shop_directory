import React, {
  Component
} from 'react';
import Projects from './Components/Projects';
import './App.css';
import $ from 'jquery';
import Todos from './Components/Todos';
import Shops from './Components/Shops';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [


      ]
    }
  }


  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          todos: data
        }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
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


  getProjects() {
    this.setState({
      projects: [{
          title: "Business Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
    this.getShops();
  }


  componentDidMount() {
    // this.getTodos();
  }

  render() {
    return ( <
      div className = "App" >
      <
      Shops shops = {
        this.state.shops
      }
      /> < /
      div >
    );
  }
}

export default App;
