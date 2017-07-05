var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;
var D3Time = require('d3-time');

class Home extends React.Component {

	componentWillMount(){
		const electionDay = new Date(2017, 8, 23);
		var now = new Date;
		var daysUntilElection = D3Time.timeDay.count(now, electionDay);
		this.setState( {daysUntilElection : D3Time.timeDay.count(now, electionDay)} );
	}

	render(){
		const electionUrl = "http://www.elections.org.nz/voters/enrol-check-or-update-now";
		return (
			<div className='col-sm-8 col-sm-offset-2' style={{textAlign:'center', background:'white'}}>
					<p>
						{this.state.daysUntilElection} days until election
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
