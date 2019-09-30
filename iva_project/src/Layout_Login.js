import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
//import Cctv from './Components/Cctv/Cctv';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Particles from 'react-particles-js';


const particleOpt = {
  "particles": {
    "number": {
        "value": 300,
        "density": {
            "enable": true,
            "value_area": 1803.4120608655228
        }
    }, 
    "color": {
      "value": "#000000"
    },
    "size": {
        "value": 10,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
    },

},
"interactivity": {
    "detect_on": "window",
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        },
        "onclick": {
            "enable": false,
            "mode": "bubble"
        },
        "resize": true
    } 
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      button_on: false,
      image: require('./assets/a.png')
    };
  }

  handleChange = event => {
    console.log("======>>", this.state.email, this.state.email.length)
    console.log("======>>", this.state.password, this.state.password.length)
    console.log("------>>", this.state.email.length > 0 && this.state.password.length > 0)
    console.log("......->>", this.state.button_on)

    this.setState({
      [event.target.id]: event.target.value
    });

    if (this.state.email.length > 0 && this.state.password.length > 0){
      this.setState({button_on: true})
    }
    else {
      this.setState({button_on: false})
    }

  }

  handleSubmit = event => {
    event.preventDefault();
  }


  render() {

    return ( 
        <div>
          <Particles params = {particleOpt} />
          <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
            }}
          >
            <Navbar />
            <Login 
              button_status = {this.state.button_on}
              handleSubmit = {this.handleSubmit}
              emailState = {this.state.email}
              pwdState = {this.state.password}
              changed = {this.handleChange}
            />
            
          </div>
        </div>
    );
  }
}

export default App;
/*
<Cctv photoURL = {this.state.image}/>
*/