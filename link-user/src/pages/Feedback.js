import { h, Component } from 'preact';
import { createComponent } from 'preact-fela';
import linkState from 'linkstate';

// import Feedback from '../components/Feedback';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
const Spacer = createComponent(() => ({
	height: '10px'
}));


const Title = createComponent(
	() => ({
		textAlign: 'center',
		fontSize: '15px',
		letterSpacing: '0.6pt',
		color: 'rgb(51, 51, 51)',
		margin: '0',
		marginBottom: '20pt'
	}),
	'p'
);

class FeedbackPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
	}

	render() {
		return (
			<Layout>
				<Spacer />
				<Title>Contact Form</Title>
				<div>
					<h3>Name</h3>
					<input type="text" value={this.state.name} onInput={linkState(this, 'name')} />
				</div>
				<div>
					<h3>Email</h3>
					<input type="text" value={this.state.email} onInput={linkState(this, 'email')} />
				</div>
				<div>
					<h3>Subject</h3>
					<input type="text" value={this.state.subject} onInput={linkState(this, 'subject')} />
				</div>
				<div>
					<h3>Message</h3>
					<input type="textfield" value={this.state.message} onInput={linkState(this, 'message')} />
				</div>
				<div>
					<input type="button" value="Submit" onclick={() => {}} />
				</div>
			</Layout>
		);
	}
}

export default FeedbackPage;
