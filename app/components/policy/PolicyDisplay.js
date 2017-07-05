var React = require('react');
var partyInfo = require('../../data/parties');

class PolicyDisplay extends React.Component {
	render() {
		if(this.props.topic != 'none' && this.props.displayedParties.length > 0){
			return (
				<div>
					<h2 style={{textAlign:'center'}}>{this.props.topic}</h2>
				{this.props.displayedParties.map(
					function(partyKey){
						return (
							<div key={partyKey}>
								<h3> {partyInfo[partyKey].name}:</h3>
							<ul>
								{partyInfo[partyKey].policies[this.props.topic].map(function(policy, i){
									return <li key={i} > {policy} </li>
								})}
							</ul>
					</div>
						)
					},this)}
				</div>
			)
		} else {
			return <div />
		}
	}
}

module.exports = PolicyDisplay;
