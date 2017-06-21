var React = require('react');
var PartyInstance = require('./PartyInstance');
var Link = require('react-router-dom').Link;

var Party = React.createClass({
	render: function () {
		parties = [
			{key:"national", name: "National", colour:"blue"},
			{key:"labour", name: "Labour", colour:"red"},
			{key:"greens", name: "Greens", colour:"green"} 
		]
		return (
			<div style={{align:'justify'}}>
				{parties.map(function(party){
				return( 
				<Link key={party.key} to={"/party/"+party.key}>
					<PartyInstance name={party.name} colour={party.colour} />
				</Link>
				)})}
				<p>
					Do some database magic to fetch list of parties

					Clicking on one opens info page with info sheets -- list MPs, current seats, etc. 

					National, Labour, etc
				</p>
			</div>
			)
}
})

module.exports = Party;
