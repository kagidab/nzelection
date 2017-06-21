var React = require('react');
var Home = require('../components/Home');
D3Time = require('d3-time');

class HomeContainer extends React.Component{
	componentWillMount(){
		var now = new Date;
		const electionDay = new Date(2017, 8, 23);

		this.state = {
			days : D3Time.timeDay.count(now, electionDay)
		}
	}

	render(){
		return (
			<Home days={this.state.days} />
		);
	}
}

module.exports = HomeContainer;
