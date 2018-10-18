import { h } from 'preact';
import { createComponent } from 'preact-fela';

const Container = createComponent(() => ({
	textAlign: 'center',
	padding: 50
}));

const LoadingSpinner = createComponent(
	() => ({
		content: '""',
		display: 'inline-block',
		position: 'absolute',
		width: '100px',
		height: '100px',
		top: '50%',
		marginTop: '-50px',
		left: '50%',
		marginLeft: '-50px',
		zIndex: '1',
		borderRadius: '50%',
		border: '2px solid #00BCD4',
		borderLeftColor: 'transparent',
		background: 'transparent',
		animation: 'rotate 1s infinite linear'
	}),
	'img'
);

// const rotateKeyFrame = props => ({
// 	'0%': { transform: 'rotate(0deg)' },
// 	'100%': { transform: 'rotate(360deg)' }
// });

const Loading = props => (
	<Container>
		<LoadingSpinner src="/linksf_loader.gif" />
	</Container>
);

export default Loading;
