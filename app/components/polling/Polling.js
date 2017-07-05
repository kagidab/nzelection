var React = require('react');
var parties = require('../../data/parties.json');
var polling = require('../../data/latestpoll.json');
var SeatInputs = require('./SeatInputs');
var SeatDiagram = require('./SeatDiagram');

class Polling extends React.Component{

	constructor(props) {
		super(props);
		this.changeSeats = this.changeSeats.bind(this);
	}

	changeSeats(party, newSeats){
		this.setState({polling : newSeats});
	}

	render() {
		return (
			<div className="col-sm-8 col-sm-offset-2" style={{background:'white'}} >
				<div className="col-sm-5">
					<SeatInputs parties={parties} polling={polling} changeSeatsCallback={this.changeSeats} maxSeats="200" />
				</div>
				<div className="col-sm-6 col-sm-offset-1">
					<SeatDiagram parties={parties} seats={polling} />
				</div>
			</div>
		)
	}

}

module.exports = Polling;
