var React = require('react');

var ReactRouter = require('react-router');
var ReactRouterDom = require('react-router-dom');

var Header = require('./Header');
var Polling = require('./polling/Polling');
var About = require('./about/About');
var Party = require('./party/Party');
var Policy = require('./policy/Policy');
var styles = require('../styles/');
var Home = require('./home/Home');
var Infosheet = require('./party/Infosheet');

var Router = ReactRouterDom.HashRouter
var Route = ReactRouterDom.Route
var Switch = ReactRouterDom.Switch
var Match = ReactRouter.Match

class Main extends React.Component {
	componentWillMount(){
		document.body.style.background = '#eee';
		document.body.style.height = '100%';
	}
	render(){
		return (
			<Router>
				<div className='main-container jumbotron col-sm-12'>
					<Header />
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/poll' component={Polling}/>
						<Route exact path='/party' component={Party}/>
						<Route path='/party/:partyName' component={Infosheet}/>
						<Route path='/policy' component={Policy}/>
						<Route path='/about' component={About}/>
						<Route render={function () { return <p> Not Found </p> }}/>
					</Switch>
				</div>
			</Router>
			);
	}
};

module.exports = Main;
