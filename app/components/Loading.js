var React = require('react');

var styles = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: '30px',
	}
};

class ConfirmBattle extends React.Component  {
	constructor(props){
		super(props);
		this.state = {
			text: 'Loading'
		}
	}

	componentDidMount(){
		var stopper = 'Loading...'
		this.interval = setInterval(function () {
			if(this.state.text === stopper) {
				this.setState({
					text: 'Loading'
				})
			}
		}, 300);
	}
	render(){
		return(
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
		);
	}

}

module.exports = Loading;
