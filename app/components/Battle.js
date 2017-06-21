var React = require('react');

class Battle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			playerOne:'zz',
			playerTwo:'yy' 
		}
	}
	render() {
		return (
			<div>
				<h1> Fight </h1>
				<Player username={this.props.routeParams.playerOne} />
				<Player username={this.state.playerTwo} />
			</div>
		);
	}
}

Battle.contextTypes = {
	router : React.PropTypes.object.isRequired
}

module.exports = Battle;
