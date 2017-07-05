var React = require('react');
var Link = require('react-router-dom').Link;
var parties = require('../../data/parties.json');

class Infosheet extends React.Component {

	render(){
		var partyName = this.props.match.params.partyName;
		var partyInfo = parties[partyName];
		return (
			<div className="col-sm-8 col-sm-offset-2" style={{background:'white'}}>
				<div className="col-sm-7">
					<h2>
						{partyInfo.fullname}
					</h2>
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
				</div>
				<div className="col-sm-4 col-sm-offset-1" >
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
				<a className="twitter-timeline" data-height='400' 
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
