var React = require('react');
var ReactRouterDom = require('react-router-dom');
var NavbarInstance = require('./NavbarInstance');
var Link = ReactRouterDom.Link;

class Header extends React.Component{

	constructor(props){
		super(props);
		this.defaultProps = {
			page : ""
		}
	}

	render() {
		return (
			<div>
				<Link to='/' style={{textDecoration:'none', color:'black'}}> 
					<h1 className="text-center">Election 2017</h1>
				</Link>
				<NavbarInstance page={this.props.page}/>
			</div>
			)
}
}

module.exports = Header;
