var React = require('react');

var PartyInstance = React.createClass({
	render: function () {
		return (
			<div style={{height : 250, width : 200, display:'inline-block', textAlign:'center', color:'black', margin:10, lineHeight:'2px'  }}>
				<div style={
						{width:200,height:200,
							backgroundImage: `url(${require("../../img/"+this.props.image)})`,
							backgroundSize: 'contain'
						}}>
					</div>
					<h2>{this.props.name}</h2>
				</div>
		)
	}
})

module.exports = PartyInstance;
