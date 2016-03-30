var React = require('react');
var uuid = require('node-uuid');

var App = React.createClass({
	getInitialState: function () {
		return {
			notes: [
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
			]
		};
	},
	addNote: function () {
		var newNote = {
			id: uuid.v4(),
			task: 'New Task'
		};
		this.setState({
			notes: this.state.notes.concat([newNote])
		});
	},
	render: function () {
		var listItems = this.state.notes.map(function (note) {
			return (
				<li key={note.id}>
					{note.task}
				</li>
			);
		});
		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<ul>{listItems}</ul>
			</div>
		);
	}
});

module.exports = App;
