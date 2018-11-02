import React, {Component} from 'react';
import TextFieldGroup from "../common/TextFieldGroup";
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

		if (1){

		}

		history.push('/home');
	};

	render() {
		const {errors} = this.state;

		return (
			<main>
				<div className="container">
					<div className="login">
						<div className="container">
							<div className="row">
								<div className="col-md-8 m-auto">
									<h1 className="display-4 text-center">Log In</h1>
									<form onSubmit={this.onSubmit}>

										<TextFieldGroup type="text" onChange={this.onChange} value={this.state.email} name="username"
										                placeholder="User name" error={errors.email}/>

										<TextFieldGroup type="password" onChange={this.onChange} value={this.state.password}
										                name="password" placeholder="password" error={errors.password}/>

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