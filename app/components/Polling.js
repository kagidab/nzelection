var React = require('react');
var partyFile = require('../data/parties.json');
var pollingFile = require('../data/latestpoll.json');
var SeatInputs = require('./SeatInputs');
var SeatDiagram = require('./SeatDiagram');

class Polling extends React.Component{

	constructor(props) {
		super(props);
		this.changeSeats = this.changeSeats.bind(this);
		this.state = {
			polling : pollingFile
		}
	}

	changeSeats(party, newSeats){
		this.setState({polling : newSeats});
		console.log(this.state.polling);
	}

	render() {
		return (
			<div>
				<div style={{width:'45%', display:'inline-block'}} >
					<SeatInputs polling={pollingFile} changeSeatsCallback={this.changeSeats} maxSeats="200" />
				</div>
				<div style={{width:'45%', display:'inline-block', float:'right'}} >
					<SeatDiagram parties={partyFile} seats={this.state.polling} />
				</div>
			</div>
		)
	}

}

module.exports = Polling;
