import React, {Component} from 'react';
import TextFieldGroup from "../../components/common/TextFieldGroup";
import history from '../../history';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			errors: {}
		};
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			username: this.state.username,
			password: this.state.password,
		};

		if (this.state.username === "demo" && this.state.password === "demo") {
			localStorage.setItem('openSkyUser', this.state.username);
			localStorage.setItem('openSkyPassword', this.state.password);
			history.push('/home');
		} else {
			if (this.state.username !== "demo")
				this.setState({errors: {}})
		}

		history.push('/home');
	};

	render() {
		const {errors, username, password} = this.state;

		return (
				<main>
					<div className="container">
						<div className="login">
							<div className="container">
								<div className="row">
									<div className="col-md-8 m-auto">
										<h1 className="display-4 text-center">Log In</h1>
										<form onSubmit={this.onSubmit}>

											<TextFieldGroup type="text" onChange={this.onChange}
											                value={username} name="username"
											                placeholder="User name" error={errors.username}/>

											<TextFieldGroup type="password" onChange={this.onChange}
											                value={password}
											                name="password" placeholder="password"
											                error={errors.password}/>

											<input type="submit" className="btn btn-info btn-block mt-4"/>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
		);
	}
}

export default Login;