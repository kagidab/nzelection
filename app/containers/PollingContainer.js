var React = require('react');
var MainContainer = require('../containers/MainContainer');
var Polling = require('../components/Polling');

var PollingContainer = React.createClass({
	render: function () {
		return (
			<Polling />
		)
	}
})

module.exports = Polling;
