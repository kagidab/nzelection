var React = require('react');
var ChooseParties = require('./ChooseParties');
var ChoosePolicies = require('./ChoosePolicies');
var PolicyDisplay = require('./PolicyDisplay');
var parties =  require('../../data/parties');

class Policy extends React.Component{

	constructor(props){
		super(props);
		var partyList = Object.keys(parties);
		this.state = {topic : 'none', displayedParties:partyList}
		this.policyCallback = this.policyCallback.bind(this);
		this.partyCallback = this.partyCallback.bind(this);
	}

	policyCallback(topic){
		this.setState({topic: topic});
	}

	partyCallback(parties){
		this.setState({displayedParties: parties});
	}

	render() {
		return (
			<div className="col-sm-8 col-sm-offset-2" style={{background:'white'}}>
				<div className="container">
					<div className="row justify-content-md-center" >
						<div className="col-sm-3 col-sm-auto">
							<ChooseParties parties={parties} updateParties={this.partyCallback}/>
						</div>
						<div className="col-sm-3 col-sm-auto"style={{background:'white'}}>
							<ChoosePolicies updatePolicies={this.policyCallback} />
						</div>
						<div className="col-sm-6"style={{background:'white'}}>
							<PolicyDisplay parties={parties} topic={this.state.topic} displayedParties={this.state.displayedParties} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Policy;
//<div style={{width:'250px', display:'inline-block', float:'left', paddingRight:'10px'}} >
//<div style={{width:'calc(100% - 470px)', display:'inline-block', float:'right'}} >
//				<div style={{width:'200px', display:'inline-block', float:'left', paddingRight:'10px'}} >
