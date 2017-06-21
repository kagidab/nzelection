var React = require('react');
var MainContainer = require('../containers/MainContainer');
var Party = require('../components/Party');

var PartyContainer = React.createClass({
	render: function () {
		return (
			<Party />
		)
	}
})

module.exports = Party;
