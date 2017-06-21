React = require('react');

var partyInfo =
	[
		{key:'greens', name:'Greens', currentMP: 14,
			leader:'Metiria Turei/James Shaw', 
			twitter:"nzgreens"
		},
		{key:'national', name:'National',
			twitter:"nznationalparty"
		},
		{key:'labour', name:'Labour', currentMP: 31,
				website:"http://www.labour.org.nz/",
				twitter:"nzlabour"}
	];

class Infosheet extends React.Component {

	render(){
		var partyName = this.props.match.params.partyName;
		return (
			<div>
				{Object.keys(partyInfo).filter(function(key){
					return partyInfo[key].key === partyName; 
				}).map(function(key){
				return(
				<div key={key}>
					<h1>
						{partyInfo[key].name}
					</h1>
					<a className="twitter-timeline" data-height='400' data-width='300' 
						href={"https://twitter.com/"+partyInfo[key].twitter}>Tweets</a> 
				</div>
				)})}
			</div>
		);
	}

	componentDidMount(){
		twttr.widgets.load();
	}
}

module.exports = Infosheet;
