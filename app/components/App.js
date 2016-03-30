var React = require('react');
var uuid = require('node-uuid');

var App = React.createClass({
	render: function(){
		var notes = [
			{
				id:   uuid.v4(),
				task: 'Learn Webpack'
			},
			{
				id:   uuid.v4(),
				task: 'Learn React'
			},
			{
				id:   uuid.v4(),
				task: 'Do Laundry'
			}
		];
		var listItems = notes.map(function (note) {
			return (
				<li key={note.id}>
					{note.task}
				</li>
			);
		});
		return (
			<div>
				<ul>{listItems}</ul>
			</div>
		);
	}
});

module.exports = App;
