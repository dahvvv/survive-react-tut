var React = require('react');
var Notes = require('./Notes');
var uuid = require('node-uuid');

var App = React.createClass({
	getInitialState: function () {
		return {
			notes: [
				{
					task: 'Learn Webpack',
					id:   uuid.v4()
				},
				{
					task: 'Learn React',
					id:   uuid.v4()
				},
				{
					task: 'Do Laundry',
					id:   uuid.v4()
				}
			]
		};
	},
	addNote: function () {
		this.setState({
			notes: this.state.notes.concat([{
				task: 'New Task',
				id:   uuid.v4()
			}])
		});
	},
	editNote: function (id, task) {
		// don't modify it if trying to set an empty value!
		if (!task.trim()) {
			return;
		}

		var notes = this.state.notes.map(function (note) {
			if (note.id === id && task) {
				note.task = task;
			}
			return note;
		});

		this.setState({ notes: notes });
	},
	deleteNote: function (id, e) {
		// avoid bubbling to edit
		e.stopPropagation();
		var notes = this.state.notes.filter(function (note) {
			return note.id !== id;
		});
		this.setState({ notes: notes });
	},
	render: function () {
		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<Notes 
					notes={this.state.notes} 
					onEdit={this.editNote} 
					onDelete={this.deleteNote} />
			</div>
		);
	}
});

module.exports = App;
