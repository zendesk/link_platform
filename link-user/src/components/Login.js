import { h, Component } from 'preact';
import { createComponent } from 'preact-fela';

// Styles
const LoginBox = createComponent(() => ({
	display: 'flex',
	alignItems: 'center',
	flexFlow: 'column nowrap'
}));

const FieldContainer = createComponent(() => ({
	width: '200px',
	paddingTop: '20px'
}));

const LoginField = createComponent(
	() => ({
		width: '200px',
		height: '30px',
		lineHeight: '30px',
		border: '1px solid #ddd'
	}),
	'input'
);

const LoginSubmit = createComponent(() => ({
	paddingTop: '20px'
}));

const Button = createComponent(
	() => ({
		width: '200px',
		height: '30px',
		border: '1px solid #d5d5d5',
		background: 'none',
		backgroundColor: '#e5e5e5',
		fontSize: '12pt'
	}),
	'btn'
);

// Main component
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = (field, event) => {
		const fields = {};
		fields[field] = event.target.value;

		this.setState(fields);
	}

	handleSubmit = event => {
		const { email, password } = this.state;

		this.props.handleSubmit(email, password);
	}

	render() {
		return (
			<LoginBox>
				<FieldContainer>
					<label for="email">Email</label>
					<br />
					<LoginField
						id="email"
						type="text"
						value={this.state.email}
						onChange={e => this.handleChange('email', e)}
					/>
				</FieldContainer>
				<FieldContainer>
					<label for="password">Password</label>
					<br />
					<LoginField
						id="password"
						type="password"
						onKeyPress={target => target.charCode === 13 && this.handleSubmit()}
						value={this.state.password}
						onChange={e => this.handleChange('password', e)}
					/>
				</FieldContainer>
				<LoginSubmit>
					<Button type="button" onClick={this.handleSubmit}>
						Login
					</Button>
				</LoginSubmit>
			</LoginBox>
		);
	}
}

export default Login;
