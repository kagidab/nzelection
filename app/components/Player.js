var React = require('react');

class Player extends React.Component{
	render() {
		return (
			<div>
			{this.props.username}
			</div>
		);
	}
}
