var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;


class SeatInputs extends React.Component {

	constructor(props){
		super(props);
		this.state = { seats : this.props.polling }
	}

	changeSeats(event, partyKey){
		var newSeats = parseInt(event.target.value);
		if(newSeats > 0 && newSeats < this.props.maxSeats){
			var updatedSeatArray = this.state.seats;
			updatedSeatArray[partyKey] = newSeats;
			this.setState({seats : updatedSeatArray});
			this.props.changeSeatsCallback(partyKey, this.state.seats); // change to send single variable
		}
	}

	/* Makes sure input is sensible, doesn't stop user pasting e,-/+/, but that's not a big deal
	 * There's presumably an easy way to regex [0-9] instead
	 */
	checkNumber(event) {
		if(event.charCode < '0'.charCodeAt(0) || event.charCode > '9'.charCodeAt(0)) event.preventDefault(); 
	}


	render(){
		var parties = this.props.parties;
		return (
			<div>
				<div>
					<h2 style={{textAlign: 'center'}}> Seat Allocation</h2>
					<form>
						{Object.keys(this.state.seats).map(function(partyKey, index){
							var partyInfo = parties[partyKey];
							return( 
								<FormGroup key={partyKey} className="col-sm-12">
									<div className="col-sm-8">
										<ControlLabel> {partyInfo.name} </ControlLabel>
									</div>
									<div className="col-sm-4">
										<FormControl type="number" id={"seats" + partyKey} defaultValue={this.state.seats[partyKey]} min="0" step="1" 
											max={this.props.maxSeats} onKeyPress={this.checkNumber} style={{width:'70px', display:'inline-block'}} 
											onChange={(e) => this.changeSeats(e, partyKey)}/>
									</div>
								</FormGroup>
							)}, this)
						}
					</form>
				</div>
				<h5 style={{textAlign:'justify'}}>
					Default values are taken from recent polling data
					(Newshub Reid Research 15/6/17),
					with assumption Maori, ACT and United Future each win an electorate.
					Calculate seat numbers for different result
					<a href="http://www.elections.org.nz/voting-system/mmp-voting-system/mmp-seat-allocation-calculator"> here</a>.
				</h5>
			</div>
		);
	}
}

module.exports = SeatInputs;
