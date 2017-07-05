var React = require('react');

class ChooseParties extends React.Component {

	constructor(props){
		super(props);
		var inSet = Object.keys(this.props.parties).map(function(party){ return {key:party, displayed: true};});
		this.state = {partiesDisplayed : inSet};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(object, index){
		var newSet = this.state.partiesDisplayed;
		newSet[index].displayed = !newSet[index].displayed;
		this.setState({partiesDisplayed : newSet});
		this.props.updateParties(newSet.filter(party=> party.displayed).map(function(party){return party.key}));
	}

	render() {
		return (
			<div>
				{Object.keys(this.props.parties).map(
				function(party, i){
					return <PartyBanner key={party} index={i} 
						toggle={this.state.partiesDisplayed[i].displayed}
					clickCallback={this.handleClick} partyInfo={this.props.parties[party]} /> 
				},this)}

			</div>
		)
	}
}

class PartyBanner extends React.Component {

	handleClick(){
		this.props.clickCallback(this, this.props.index);
	}

	render(){
		if(this.props.toggle){
			return (
				<div>
					<button className="btn btn-sm" onClick={e=>this.handleClick(e)}
						style={{width: '90%', display:'inline', align:'center',
						background: 'linear-gradient(to right,'+this.props.partyInfo.colour1+','+this.props.partyInfo.colour2+')'}}>
						<h3 style={{color:"white"}}>{this.props.partyInfo.name}</h3>
				</button>
		</div>
			);
		} else return (
			<div title={this.props.partyInfo.name}>
				<button className="btn" onClick={e=>this.handleClick(e)} style={{width: '90%', background: '#ddd'}} >
						<h3 style={{color:"black"}}>{this.props.partyInfo.name}</h3>
				</button>
			</div>
		);
	}
}

module.exports = ChooseParties;
