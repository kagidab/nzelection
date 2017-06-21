var React = require('react');
var MainContainer = require('../containers/MainContainer');
var Policy = require('../components/Policy');

var PolicyContainer = React.createClass({
	render: function () {
		return (
			<Policy />
		)
	}
})

module.exports = Policy;
