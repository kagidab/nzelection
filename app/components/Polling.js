var React = require('react');
var partyFile = require('../data/parties.json');
var pollingFile = require('../data/latestpoll.json');
var SeatInputs = require('./SeatInputs');
var SeatDiagram = require('./SeatDiagram');

var Polling = React.createClass({
	render: function () {
		return (
			<div>
				<SeatInputs />

				<SeatDiagram parties={partyFile} polling={pollingFile.pollData} />
			</div>
			)
	}
})

module.exports = Polling;
