var React = require('react');


var PartyInstance = React.createClass({
	render: function () {
		return (
			<div style={
				{width:300,height:300,margin:10, 
				backgroundColor:this.props.colour, 
				color:'white', display:'inline-block',
				textAlign:'center'
				}}>

				<h2>{this.props.name}</h2>
			</div>
		)
	}
})

module.exports = PartyInstance;
