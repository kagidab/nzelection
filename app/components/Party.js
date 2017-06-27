var React = require('react');
var PartyInstance = require('./PartyInstance');
var Link = require('react-router-dom').Link;
var partyFile = require('../data/parties.json');

class Party extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		var parties = partyFile;

		return (
			<div>
				{Object.keys(parties).map(function(party){
					return( 
						<Link key={party} to={"/party/"+party}>
							<PartyInstance name={parties[party].name} image={parties[party].image}/>
						</Link>
					)
				})
				}
			</div>
		);
	}
}

module.exports = Party;
