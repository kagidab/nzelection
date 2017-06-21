var React = require('react');
var ReactRouter = require('react-router-dom');
var MainContainer = require('../containers/MainContainer');
var Link = ReactRouter.Link;
var D3Time = require('d3-time');

class Home extends React.Component {

	componentWillMount(){
		const electionDay = new Date(2017, 8, 23);
		var now = new Date;
		this.state = {
			days : D3Time.timeDay.count(now, electionDay)
		}
	}

	render(){
		const electionUrl = "http://www.elections.org.nz/voters/enrol-check-or-update-now";
		return (
			<div>
				<p>
					{this.state.days} days until election
				</p>
				<p>
					News or something?
				</p>
				<p>
					<a href={electionUrl}>
						<button className="btn btn-lg btn-success"> Enroll to vote </button>
					</a>
				</p>
			</div>
			);
	}
}

module.exports = Home;
