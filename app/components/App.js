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
	render: function () {
		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<Notes notes={this.state.notes} />
			</div>
		);
	}
});

module.exports = App;
