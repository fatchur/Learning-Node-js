import React, { Component } from 'react';
import LayoutCctv from './Layout_Cctv';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Particles from 'react-particles-js';


const particleOpt = {
	"particles": {
		"number": {
			"value": 300,
			"density": {
				"enable": true,
				"value_area": 1803.4120608655228 }}, 
		"color": {
		"value": "#000000" },
		"size": {
			"value": 10,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false }},},

	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"},
			"onclick": {
				"enable": false,
				"mode": "bubble"},
			"resize": true } }
	}


class App extends Component {
	/**
	 * @param  {} props
	 * @param  {} {super(props
	 * @param  {""} ;this.state={email
	 * @param  {""} password
	 * @param  {false} button_on
	 * @param  {false} button_already_clicked
	 * @param  {require('./assets/a.png'} image
	 */
	constructor(props) {
		super(props);

		this.state = {
		email: "",
		password: "",
		button_on: false,
		button_already_clicked: false,
		image: require('./assets/cctv.svg')
		};
	}


	/**
	 * @param  {} "======>>"
	 * @param  {} this.state.email
	 * @param  {} this.state.email.length
	 * @param  {} console.log("======>>"
	 * @param  {} this.state.password
	 * @param  {} this.state.password.length
	 * @param  {} console.log("------>>"
	 * @param  {} this.state.email.length>0&&this.state.password.length>0
	 * @param  {} console.log("......->>"
	 * @param  {} this.state.button_on
	 * @param  {event.target.value}} this.setState({[event.target.id]
	 */
	handleChange = event => {
		console.log("======>>", this.state.email, this.state.email.length)
		console.log("======>>", this.state.password, this.state.password.length)
		console.log("------>>", this.state.email.length > 0 && this.state.password.length > 0)
		console.log("......->>", this.state.button_on)

		this.setState({
		[event.target.id]: event.target.value });

		if (this.state.email.length > 0 && this.state.password.length > 0){
		this.setState({button_on: true}) }
		else {
		this.setState({button_on: false}) }
	}


	handleSubmit = event => {
		event.preventDefault();
		this.setState({button_already_clicked: true})
		console.log("button is clicked")
	}
 

	render() {

		if (this.state.button_already_clicked)
		{
			
			return (
				<div>
					<Particles params = {particleOpt} />
					<LayoutCctv imageURL = {this.state.image}/>
				</div>); }

		else {
			return ( 
				<div>
					<Particles params = {particleOpt} />
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%" }}>

						<Navbar />
						<Login 
							button_status = {this.state.button_on}
							handleSubmit = {this.handleSubmit}
							emailState = {this.state.email}
							pwdState = {this.state.password}
							changed = {this.handleChange} />
						
					</div>
				</div>); }}
	}

export default App;