var React = require('react');
var Bootstrap = require('react-bootstrap');
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var LinkContainer = require('react-router-bootstrap').LinkContainer;

class NavbarInstance extends React.Component{

	render() {
		return (
			<div>
				<Nav style={{border: '5px !important'}} bsStyle='tabs' justified>
					<LinkContainer to="/party">
						<NavItem>Parties</NavItem>
					</LinkContainer>
					<LinkContainer to="/poll">
						<NavItem>Polling</NavItem>
					</LinkContainer>
					<LinkContainer to="/policy">
						<NavItem>Policy</NavItem>
					</LinkContainer>
					<LinkContainer to="/about">
						<NavItem>About</NavItem>
					</LinkContainer>
				</Nav>
			</div>
		)}
};

module.exports = NavbarInstance;
