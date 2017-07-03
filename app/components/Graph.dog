React = require('react');
ReactDom = require('react-dom');
D3 = require('d3');
D3TimeFormat = require('d3-time-format');
D3Scale = require('d3-scale');
D3Shape = require('d3-shape');


class Graph extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		var svg = D3.select("svg");
		console.log(Data);

		var margin = {top: 20, right: 20, bottom: 30, left: 50},
			width = +svg.attr("width") - margin.left - margin.right,
			height = +svg.attr("height") - margin.top - margin.bottom,
			g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var parseTime = D3TimeFormat.timeParse("%d-%b-%y");

		var x = D3Scale.scaleTime()
			.rangeRound([0, width]);

		var y = D3Scale.scaleLinear()
			.rangeRound([height, 0]);

		var line = D3Shape.line()
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y(d.close); });

		D3.csv('data/data.csv', function(d) {
			d.date = parseTime(d.date);
			d.close = +d.close;
			return d;
		}, function(error, data) {
			if (error) throw error;

			x.domain(D3.extent(data, function(d) { return d.date; }));
			y.domain(D3.extent(data, function(d) { return d.close; }));

			g.append("g")
				.attr("transform", "translate(0," + height + ")")
				.call(D3.axisBottom(x))
				.select(".domain")
				.remove();

			g.append("g")
				.call(D3.axisLeft(y))
				.append("text")
				.attr("fill", "#000")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", "0.71em")
				.attr("text-anchor", "end")
				.text("Price ($)");

			g.append("path")
				.datum(data)
				.attr("fill", "none")
				.attr("stroke", "steelblue")
				.attr("stroke-linejoin", "round")
				.attr("stroke-linecap", "round")
				.attr("stroke-width", 1.5)
				.attr("d", line);
		});
	}
	render(){
		return (
			<svg width="960" height="500">
			</svg>
			);
	}
}

module.exports = Graph;
