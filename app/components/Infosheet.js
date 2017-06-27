var React = require('react');
var partyFile = require('../data/parties.json');
var Link = require('react-router-dom').Link;

class Infosheet extends React.Component {

	render(){
		var partyName = this.props.match.params.partyName;
		var partyInfo = partyFile[partyName];
		return (
			<div>
				<div>
					<h1>
						{partyInfo.fullname}
					</h1>
					<p>
						Leader: {partyInfo.leader}
					</p>
					<p>
						Current MPs: {partyInfo.currentmp}
					</p>
					<p>
						<a href={partyInfo.website}>
							Website
						</a>
					</p>
					<TwitterWidget twitter={partyInfo.twitter} />
				</div>
			</div>
		);
	}

	componentDidMount(){
		twttr.widgets.load();
	}
}

class TwitterWidget extends React.Component {
	render(){
		if(this.props.twitter != undefined){
			return ( 
				<a className="twitter-timeline" data-height='400' data-width='300' 
					href={"https://twitter.com/"+this.props.twitter}>
					Tweets
				</a> 
			);
		} else {
			return null;
		}
	}
}

module.exports = Infosheet;
