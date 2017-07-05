var React = require('react');

class ChoosePolicies extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentTopic: "Housing",
			currentSelection: null
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(topic, object){
		if(this.state.currentSelection != null){
			this.state.currentSelection.unclick();
		}
		this.setState({currentTopic : topic, currentSelection : object});
		this.props.updatePolicies(topic);
	}

	render() {
		//could automate topics?
		return (
			<div>
				<PolicyButton id="housing"  text="Housing" current clickCallback={this.handleClick} />
				<PolicyButton id="budget" text="Budget" clickCallback={this.handleClick} />
				<PolicyButton id="business" text="Business" clickCallback={this.handleClick} />
				<PolicyButton id="immigration" text="Immigration" clickCallback={this.handleClick} />
				<PolicyButton id="social" text="Social" clickCallback={this.handleClick} />
				<PolicyButton id="crime" text="Crime" clickCallback={this.handleClick} />
				<PolicyButton id="university" text="University" clickCallback={this.handleClick} />
				<PolicyButton id="super" text="Super" clickCallback={this.handleClick} />
				<PolicyButton id="welfare" text="Welfare" clickCallback={this.handleClick} />
			</div>
		)
	}
}

class PolicyButton extends React.Component {

	constructor(props){
		super(props);
		if(this.props.current) {
			this.state = {backgroundColor:'#eee', current: true}
		} else this.state = {backgroundColor:'white', current: false}
	}

	updateHoverState(event, toggleHover){
		if(toggleHover){
			this.setState({hover:true})
		} else {
			this.setState({hover:false})
		}
	}

	handleClick(event){
		this.setState({current:true});
		this.props.clickCallback(this.props.text, this);
	}

	unclick(){
		this.setState({current : false});
	}

	textColour(){
		if(this.state.hover || this.state.current){
			return "white";
		} else {
			return "black";
		}
	}

	backgroundColor(){
		if(this.state.hover){
			return "#26a";
		} else if(this.state.current){
			return "#37C";
		} else {
			return "white";
		}
	}

	componentWillMount(){
			if(this.props.current) this.handleClick();
	}

	render(){
		return (
			<div>
				<button className="btn" style={{ textAlign:'left',
					width: '100%', backgroundColor: this.backgroundColor(),
					color: this.textColour()
				}} 
					onMouseEnter={(e) => this.updateHoverState(e, true)}
					onMouseLeave={(e) => this.updateHoverState(e, false)}
					onClick={(e) => this.handleClick(e)} >
					<h3>
						{this.props.text}
					</h3>
				</button>
			</div>
		);
	}
}

module.exports = ChoosePolicies;
