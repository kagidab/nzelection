var React = require('react');
var axios = require('axios');
var PartyInstance = require('./PartyInstance');
var Link = require('react-router-dom').Link;
var parties = require('../../data/parties.json');

class Party extends React.Component {

	render() {

		return (
			<div className="col-sm-8 col-sm-offset-2" style={{background:'white'}}>
				{Object.keys(parties).map(function(party){
					return( 
						<Link key={party} to={"/party/" + party}>
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
