var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');

var Home = React.createClass({
	render: function () {
		return (
			<div className="btn btn-group">
				{props.children}
			</div>
			);
	}
})

module.exports = ButtonGroup;
