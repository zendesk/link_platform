import { h, Component } from 'preact';
import { createComponentWithProxy } from 'preact-fela';
import linkState from 'linkstate';

// import Feedback from '../components/Feedback';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
const Spacer = createComponentWithProxy(() => ({
	height: '10px'
}));


const Title = createComponentWithProxy(
	() => ({
		textAlign: 'left',
		display: 'block',
		fontSize: '15px',
		letterSpacing: '0.6pt',
		color: 'rgb(51, 51, 51)',
		marginBottom: '20pt'
	}),
	'h4'
);

const FormLabel = createComponentWithProxy(
	() => ({
		display: 'block'
	}),
	'label'
)

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
				<Title>Give us feedback</Title>
				<div>
					<FormLabel>Name</FormLabel>
					<input type="text" placeholder='Your name' value={this.state.name} onInput={linkState(this, 'name')} />
				</div>
				<div>
					<FormLabel>Email</FormLabel>
					<input type="text" placeholder='Your email' value={this.state.email} onInput={linkState(this, 'email')} />
				</div>
				<div>
					<FormLabel>Subject</FormLabel>
					<input type="text" placeholder='Subject' value={this.state.subject} onInput={linkState(this, 'subject')} />
				</div>
				<div>
					<FormLabel>Message</FormLabel>
					<textarea placeholder='Message' value={this.state.message} onInput={linkState(this, 'message')} />
				</div>
				<div>
					<input type="button" value="Submit Feedback" onclick={() => {}} />
				</div>
			</Layout>
		);
	}
}

export default FeedbackPage;
