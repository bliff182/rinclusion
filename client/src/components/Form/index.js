import React, { Component } from "react";
import * as firebase from "firebase";
// import "./style.css";

class Form extends Component {
	state = {
		email: "",
		userName: "",
		password: "",
		confirmPass: ""
	};

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		if (name === "password") {
			value = value.substring(0, 30);
		}

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (!this.state.userName || !this.state.email || !this.state.password) {
			alert("Fill out your first and last name please!");
		} else if (this.state.password.length < 6) {
			alert(`Please choose a more secure password`);
		} else if (!this.state.email.includes("@", ".")) {
			alert(
				"Invalid email, please ensure the email is in the format of 'user@email.com'"
			);
		} else if (
			!this.state.password.match(/\d+/g) ||
			!this.state.password.match(/[a-zA-Z]/)
		) {
			alert("Please ensure the password contains letters and numbers");
		} else if (this.state.password !== this.state.confirmPass) {
			alert("Passwords do not match");
		} else {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode);
					console.log(errorMessage);
				});
		}
		this.setState({
			userName: "",
			email: "",
			password: "",
			confirmPass: ""
		});
	};

	render() {
		// Notice how each input has a `value`, `name`, and `onChange` prop
		return (
			<div>
				<form className="form">
					<input
						value={this.state.userName}
						name="userName"
						onChange={this.handleInputChange}
						type="text"
						placeholder="Username"
					/>
					<input
						value={this.state.email}
						name="email"
						onChange={this.handleInputChange}
						type="email"
						placeholder="Email"
					/>
					<input
						value={this.state.password}
						name="password"
						onChange={this.handleInputChange}
						type="password"
						placeholder="Password"
					/>
					<input
						value={this.state.confirmPass}
						name="confirmPass"
						onChange={this.handleInputChange}
						type="password"
						placeholder="Confirm password"
					/>
					<button onClick={this.handleFormSubmit}>Sign up!</button>
					<p>or</p>
					<a href="#">Sign in</a>
				</form>
			</div>
		);
	}
}

export default Form;
