/* 
 * Creates a visual representation of the seats in parliament, calculates whether majorities can be formed with coalitions
 */

var React = require('react');

class SeatDiagram extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			parties : this.props.parties,
		}

		{Object.keys(this.state.parties).map(function(party){
			this.state.parties[party].coalition = false;
		}, this)}

		this.toggleParty = this.toggleParty.bind(this);
	}

	toggleParty(event, party, seats) {
		var newParties = this.state.parties;
		var newToggle = !this.state.parties[party].coalition; 
		newParties[party].coalition = newToggle;
		this.setState({ parties : newParties })
	}

	borderColour(party){
		return this.state.parties[party].coalition ? "yellow" : "black";
	}

	render() {
		const seats = this.props.seats;
		console.log(seats);
		const totalSeats = Object.keys(seats).reduce(function(prev, key){ return prev + seats[key] }, 0)

		return (
			<div>
				<h2> Seats </h2>
			{Object.keys(seats).map((partyKey) => 
				[...Array(seats[partyKey])].map((x, i) => (
					<PartySquare key={i} ident={partyKey + i} colour1={this.state.parties[partyKey].colour1} 
						colour2={this.state.parties[partyKey].colour2} seats={seats[partyKey]} name={this.state.parties[partyKey].name}
						borderColour={this.borderColour(partyKey)} toggleCallback = {e => this.toggleParty(e, partyKey, seats[partyKey])}
					/>
				))
			)}

			<p>
				Total seats: {totalSeats}
			</p>
			<Coalition seats={this.props.seats} totalSeats={totalSeats} parties={this.state.parties} />
		</div>
		)
	}
}

class Coalition extends React.Component {

	selectedCoalition(){
		return Object.keys(this.props.parties).filter(key => this.props.parties[key].coalition);
	}

	seatsInCoalition(){
		const currentSeats = this.props.seats;
		return this.selectedCoalition().reduce(function(prev, key){ return prev + currentSeats[key]; }, 0);
	}

	coalitionFormed(totalSeats){
		return 2 * this.seatsInCoalition() > totalSeats ? "Majority formed" : "No majority";
	}

	coalitionString(){
		var coalition = this.selectedCoalition();
		if(coalition.length == 0){ //when no parties are selected, default to biggest party
			//this section feels a little awkward, presumably inefficient (but small arrays, so w/e)
			console.log(this.props);
			const pollingNumbers = Object.keys(this.props.seats).map(partyKey => this.props.seats[partyKey]);
			const max = Math.max(...pollingNumbers);
			const maxParty = Object.keys(this.props.seats).filter( partyKey => this.props.seats[partyKey] == max );
			coalition = [maxParty[0]];
		}
		return coalition.map(key => this.props.parties[key].name).join(', ');
	}


	render(){
		return (
			<div>
			<p>
				Seats in coalition (click squares to toggle): {this.seatsInCoalition()}
			</p>
			<p>
				{this.coalitionFormed(this.props.totalSeats)} with {this.coalitionString()}
			</p>
		</div>
		);
	}
}

class PartySquare extends React.Component {

	render(){
		return(
			<div style={{display:'inline-block', padding:'0', margin:'1px'}} 
				title={this.props.name + ": " + this.props.seats} onMouseDown={this.props.toggleCallback}>
				<svg style={{width:'25px', height:'25px', border:'2px solid', borderColor: this.props.borderColour, padding:0,margin:0}}>
					<defs>
						<linearGradient id={"grad" + this.props.ident} x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%"   style={{stopColor:this.props.colour1, stopOpacity:1}} />
							<stop offset="100%" style={{stopColor:this.props.colour2, stopOpacity:1}} /> 
						</linearGradient>
					</defs>
				<rect width='100%' height='100%' style={{fill: 'url(#grad'+this.props.ident+')'}} />
			</svg>
		</div>
		);
	}
}

module.exports = SeatDiagram;
