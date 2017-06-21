var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

class ResultsContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			scores: []
		}
	}

	componentDidMount(){
		githubHelpers.battle(this.props.location.state.playersInfo)
		.then(function (scores) {
			this.setState({
				scores: scores,
				isLoading: false
			})
		}.bind(this));
		console.log(this.state.scores);
	}

	render(){
		return (
			<Results 
			isLoading={this.state.isLoading} 
			playersInfo={this.props.location.state.playersInfo}
			scores={this.state.scores} />
		);
	}

}

module.exports = ResultsContainer;
